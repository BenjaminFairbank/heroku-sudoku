import React from 'react'
import { connect } from 'react-redux'

import { toggleMenuMode } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import {
  Typography,
  Switch,
  Box,
  Card,
  Toolbar
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    width: 340,
    margin: 'auto',
    marginBottom: 16,
  },
  card: {
    backgroundColor: theme.palette.tertiary.main,
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
    <Box className={classes.box}>
      <Card className={classes.card}>
        <Toolbar>
        <Typography variant="p" className={classes.text}>
          Easy OnClick Menu
        </Typography>
        <Box className={classes.midSpace}></Box>
        <Typography variant='p' className={classes.text}>OFF</Typography>
        <Switch
          checked={props.easyMenuMode}
          onChange={props.toggleMenuMode}
          color="secondary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <Typography variant='p' className={classes.text}>ON</Typography>
        </Toolbar>
      </Card>
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
