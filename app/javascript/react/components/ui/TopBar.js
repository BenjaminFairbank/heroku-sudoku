import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleDarkMode } from '../../modules/app'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Switch,
  Button,
  Box
} from '@material-ui/core'
import { Brightness2, BrightnessMedium } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&:focus': {
      color: 'white',
    },
  },
  midSpace: {
    flexGrow: 1,
  },
  button: {
    marginLeft: 15,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
}))

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const TopBar = (props) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <ElevationScroll {...props}>
          <AppBar>
            <Toolbar>
              <Typography
                component={Link}
                to='/'
                variant="h6"
                className={classes.title}
              >
                Heroku Sudoku
              </Typography>
              <Box variant="h6" className={classes.midSpace}></Box>
              <BrightnessMedium />
              <Switch
                checked={props.darkMode}
                onChange={props.toggleDarkMode}
                color="secondary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Brightness2 />
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </div>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}

// Login button to be inserted below <Brightness2 /> when user features become active:
// <Button className={classes.button} color="inherit">Login</Button>

const mapStateToProps = (state) => {
  return {
    darkMode: state.app.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDarkMode: () => dispatch(toggleDarkMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar)
