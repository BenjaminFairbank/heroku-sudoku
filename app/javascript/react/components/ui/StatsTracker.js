import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
  },
  textLeft: {
    fontWeight: 'bold',
    float: 'left',
  },
  textRight: {
    fontWeight: 'bold',
    float: 'right',
  },
}))

const StatsTracker = props => {
  const classes = useStyles()

  let difficulty = 'Easy'
  if (props.gameDifficulty === 2) {
    difficulty = 'Intermediate'
  } else if (props.gameDifficulty === 3){
    difficulty = 'Hard'
  }

  return (
    <Box className={classes.box}>
      <Typography variant='caption' className={classes.textLeft}>
        Game difficulty:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {difficulty}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Empty squares remaining:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {props.squaresLeft}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Percentage completed:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {props.percentageCompleted}%
      </Typography>
      <br />
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    percentageCompleted: state.game.percentageCompleted,
    squaresLeft: state.game.squaresLeft,
    gameDifficulty: state.game.gameDifficulty
  }
}

export default connect(
  mapStateToProps,
  null
)(StatsTracker)
