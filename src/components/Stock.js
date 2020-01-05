import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ReactSVG } from 'react-svg'
import { Line } from 'react-chartjs-2'

import { IMAGES_URL } from '../config'
import { graphs } from '../mocks/graphs'
import compareValues from '../utils/compare'

import Up from '../assets/up.svg'
import Down from '../assets/down.svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '30px 80px'
  },
  title: {
    fontSize: 42
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonSubtitle: {
    color: '#7E868E',
    fontWeight: 100,
    marginRight: 5
  },
  button: {
    background: '#ECEDEE',
    borderRadius: 100,
    textTransform: 'capitalize',
    marginLeft: 5,
    fontSize: 12,
    padding: '5px 30px',
    whiteSpace: 'nowrap'
  },
  buttonSelected:{
    background: '#00ADD2',
    color: '#FFFFFF'
  },
  dataContainer: {
    padding: '30px 30px 0px 30px',
  },
  image: {
    width: 100
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    margin: '5px 0px'
  },
  subtitle: {
    textTransform: 'uppercase',
    color: '#091827',
    margin: '15px 0px'
  },
  value: {
    display: 'flex',
  },
  valueVariant: {
    margin: 0,
    marginRight: 5,
    fontWeight: 100
  },
  up: {
    color: '#00C853'
  },
  down: {
    color: '#F44336'
  },
  paper: {
    color: theme.palette.text.secondary,
    border: '1px solid #D1D5D7',
    borderRadius: 0,
    boxShadow: 'none',
    boxSizing: 'border-box',
    height: 280,
    position: 'relative'
  },
  graph: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
}))

export default function Stock({ stocks }) {
  const classes = useStyles()
  const [ localState, localSetState ] = useState({ selected: 'high' })

  stocks.sort(compareValues('value', 'desc'))
  if (localState.selected === 'high') {
    stocks.sort(compareValues('variant', 'desc'))
  } else if (localState.selected === 'low') {
    stocks.sort(compareValues('variant'))
  }
    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <h1 className={classes.title}>
            Explore o mercado
          </h1>
        </Grid>
        <Grid className={classes.buttonContainer} item xs={12} md={6}>
          <h5 className={classes.buttonSubtitle}>Ordenar:</h5>
          <Button
            variant="contained"
            className={`${classes.button} ${localState.selected === 'high' && classes.buttonSelected}`}
            onClick={() => localSetState({ selected: 'high' })}
            disableElevation
          >
            Em Alta
          </Button>
          <Button
            variant="contained"
            className={`${classes.button} ${localState.selected === 'low' && classes.buttonSelected}`}
            onClick={() => localSetState({ selected: 'low' })}
            disableElevation
          >
            Em Baixa
          </Button>
        </Grid>
        {stocks.map(stock =>
          <Grid key={stock.id} item xs={12} md={3}>
            <Paper className={classes.paper}>
              <div className={classes.dataContainer}>
              <img
                alt={stock.id}
                src={`${IMAGES_URL}${stock.id.slice(0, 4)}.svg`}
                className={classes.image}
              />
              <div className={classes.nameContainer}>
                <h5 className={classes.name}>{stock.name}</h5>
                <h5 className={classes.name}>{stock.id}</h5>
              </div>
              <div>
                <h5 className={classes.subtitle}>Preço do ativo</h5>
                <div className={classes.value}>
                  <h2 className={`${classes.valueVariant} ${classes[stock.variant]}`}>R$ {stock.value}</h2>
                  {stock.variant !== 'none' &&
                    <ReactSVG
                      src={stock.variant === 'up' ? Up : Down}
                    />
                  }
                  </div>
                </div>
              </div>
              <div className={classes.graph}>
                <Line
                  data={graphs.data}
                  height={100}
                  options={graphs.options}
                />
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  )
}