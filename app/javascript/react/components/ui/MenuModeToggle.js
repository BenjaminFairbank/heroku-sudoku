import React from 'react'
import { connect } from 'react-redux'

import { toggleMenuMode } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Typography, Switch, Box, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  midSpace: {
    flexGrow: 1,
  },
  text: {
    fontWeight: 'bold',
  },
}))

const MenuModeToggle = (props) => {
  const classes = useStyles()

  return (
    <Box>
      <Toolbar disableGutters={true} className={classes.toolbar}>
        <Typography variant='subtitle1' className={classes.text}>
          Shortlist Select Mode
        </Typography>
        <Box className={classes.midSpace}></Box>
        <Typography variant='subtitle1' className={classes.text}>OFF</Typography>
        <Switch
          checked={props.easyMenuMode}
          onChange={props.toggleMenuMode}
          color="secondary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Typography variant='subtitle1' className={classes.text}>ON</Typography>
      </Toolbar>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    easyMenuMode: state.game.easyMenuMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuMode: () => dispatch(toggleMenuMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuModeToggle)
