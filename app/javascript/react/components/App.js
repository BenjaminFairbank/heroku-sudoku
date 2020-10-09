import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Home from './pages/Home'
import Play from './pages/Play'
import TopBar from './ui/TopBar'
import ScrollUpButton from './ui/ScrollUpButton'

export const App = props => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#647af7',
      },
      secondary: {
        main: '#edc0ff',
      },
      type: props.darkMode ? "dark" : "light",
    },
  });

  return (
    <Provider store={props.store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/play' component={Play} />
          </Switch>
        </BrowserRouter>
        <ScrollUpButton />
      </ThemeProvider>
    </Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.app.darkMode
  }
}

export default connect(
  mapStateToProps,
  null
)(App)
