import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ReactSVG } from 'react-svg'

import ToroLogo from './assets/toro.svg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#091827',
    boxShadow: 'none'
  },
  logo: {
    height: 17,
    width: 200
  }
}));

export default function Bar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <ReactSVG
            src={ToroLogo}
            beforeInjection={svg => {
              svg.classList.add(classes.logo)
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}