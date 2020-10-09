import React, { useState } from 'react'
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Play from './pages/Play'
import TopBar from './ui/TopBar'
import ScrollUpButton from './ui/ScrollUpButton'

export const App = (props) => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#647af7',
      },
      secondary: {
        main: '#edc0ff',
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/play' component={Play} />
        </Switch>
      </BrowserRouter>
      <ScrollUpButton />
    </ThemeProvider>
  )
}

export default App
