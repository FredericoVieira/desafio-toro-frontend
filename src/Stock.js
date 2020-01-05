import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ReactSVG } from 'react-svg'
import { Line } from 'react-chartjs-2'

import Up from './assets/up.svg'
import Down from './assets/down.svg'

import compareValues from './utils/compare'

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
    fontWeight: 100
  },
  button: {
    background: '#ECEDEE',
    borderRadius: 100,
    textTransform: 'capitalize',
    marginLeft: 5,
    fontSize: 12,
    padding: '5px 30px'
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
  const IMAGES_URL = 'https://cdn.toroinvestimentos.com.br/corretora/images/quote/'

  // const orderByHigh = () => localSetState({stocksToShow: localState.stocksToShow.sort(compareValues('value')), selected: 'high'})
  // const [ localState, localSetState ] = useState({ stocksToShow: [], selected: 'none' })

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        // label: 'My First dataset',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(0,173,210,0.4)',
        borderColor: '#00ADD2',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [50, 40, 60, 30, 65, 20, 60, 55, 90]
      }
    ]
  }

  const options = {
    mantainAspectRatio: true,
    legend: {
      display: false
   },
    scales:{
      xAxes: [{
          display: false
      }],
      yAxes: [{
        display: false,
        ticks: {
          max: 100,
          min: 0,
        }
      }]
    }
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
          <h6 className={classes.buttonSubtitle}>Ordenar:</h6>
          <Button variant="contained" className={classes.button} disableElevation>
            Em Alta
          </Button>
          <Button variant="contained" className={classes.button} disableElevation>
            Em Baixa
          </Button>
        </Grid>
        {stocks.map(stock =>
          <Grid key={stock.id} item xs={12} md={3}>
            <Paper className={classes.paper}>
              <div className={classes.dataContainer}>
              <img
                src={`${IMAGES_URL}${stock.id.slice(0, 4)}.svg`}
                className={classes.image}
              />
              <div className={classes.nameContainer}>
                <h6 className={classes.name}>{stock.name}</h6>
                <h6 className={classes.name}>{stock.id}</h6>
              </div>
              <div>
                <h6 className={classes.subtitle}>Preço do ativo</h6>
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
                  data={data}
                  height={100}
                  options={options}
                />
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  )
}