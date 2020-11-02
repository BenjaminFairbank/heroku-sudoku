import React, { useState } from 'react'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { closeAlertMessage } from '../modules/alertMessage'

import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Home from './pages/Home'
import New from './pages/New'
import Game from './pages/Game'

import TopBar from './ui/TopBar'
import ScrollUpButton from './ui/ScrollUpButton'
import AlertMessage from './ui/AlertMessage'
import HowToPlay from './ui/HowToPlay'

export const App = props => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#647af7',
      },
      secondary: {
        main: '#edc0ff',
      },
      tertiary: {
        main: '#a6bdf7'
      },
      quaternary: {
        main: '#5d7578'
      },
      quinary: {
        main: '#ef3054'
      },
      type: props.darkMode ? "dark" : "light",
    },
  });

  let alertMessageDiv

  if (props.alertMessage){
    alertMessageDiv =
    <AlertMessage
      message={props.alertMessage}
      closeAlertMessage={props.closeAlertMessage}
    />
  }

  return (
    <Provider store={props.store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <TopBar />
          {alertMessageDiv}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/games/new' component={New} />
            <Route exact path='/games/:id' component={Game} />
          </Switch>
        </BrowserRouter>
        <HowToPlay />
        <ScrollUpButton />
      </ThemeProvider>
    </Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.app.darkMode,
    alertMessage: state.alertMessage.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeAlertMessage: () => dispatch(closeAlertMessage())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
