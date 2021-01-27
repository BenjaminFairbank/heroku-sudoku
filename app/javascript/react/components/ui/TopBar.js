import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleDarkMode } from '../../modules/app'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'

import Brightness2Icon from '@material-ui/icons/Brightness2'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'

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
              <BrightnessHighIcon />
              <Switch
                checked={props.darkMode}
                onChange={props.toggleDarkMode}
                color="secondary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <Brightness2Icon />
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
