import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '30px 80px'
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 42
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: '1px solid #D1D5D7',
    borderRadius: 0,
    boxShadow: 'none',
    boxSizing: 'border-box'
  },
}))

export default function Stock({ stocks }) {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <h1 className={classes.title}>
          Explore o mercado
          </h1>
        </Grid>
        <Grid item xs={12} md={6}>
          Filtros
        </Grid>
        {stocks.map(stock =>
          <Grid key={stock.id} item xs={12} md={3}>
            <Paper className={classes.paper}>
              <h4>{stock.id}</h4>
              <h4>{stock.value}</h4>
            </Paper>
          </Grid>
        )}
      </Grid>
    </div>
  )
}