import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Box,
  Card,
  Toolbar
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    width: 340,
    margin: 'auto',
    marginBottom: 10,
  },
  card: {
    padding: 24,
    backgroundColor: theme.palette.tertiary.main,
  },
  text: {
    fontWeight: 'bold',
  },
}))

const StatsTracker = props => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <Card className={classes.card}>
        <Typography variant='p' className={classes.text}>
          Percentage completed: {props.percentageCompleted}%
        </Typography>
        <br />
        <Typography variant='p' className={classes.text}>
          Empty squares remaining: {props.squaresLeft}
        </Typography>
      </Card>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    percentageCompleted: state.game.percentageCompleted,
    squaresLeft: state.game.squaresLeft
  }
}

export default connect(
  mapStateToProps,
  null
)(StatsTracker)
