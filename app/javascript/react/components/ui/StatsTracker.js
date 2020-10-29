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
  completed: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 8,
  },
  notCompleted: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 8,
  }
}))

const StatsTracker = props => {
  const classes = useStyles()

  let difficulty = 'Easy'
  if (props.gameDifficulty === 2) {
    difficulty = 'Intermediate'
  } else if (props.gameDifficulty === 3){
    difficulty = 'Hard'
  }

  let numBoxsDone = 0
  let numRowsDone = 0
  let numColsDone = 0
  let completionMessage

  if (props.completionData !== null) {
    numBoxsDone = props.completionData.boxes.filter(box => box === true).length
    numRowsDone = props.completionData.rows.filter(row => row === true).length
    numColsDone = props.completionData.columns.filter(col => col === true).length
    if (props.squaresLeft === 0) {
      if (props.completionData.completed) {
        completionMessage =
          <Typography variant='subtitle2' className={classes.completed}>
            Congratulations! You solved the puzzle successfully!
          </Typography>
      } else {
        completionMessage =
          <Typography variant='subtitle2' className={classes.notCompleted}>
            All tiles have been filled but there are conflicts.
          </Typography>
      }
    }
  }




  return (
    <Box className={classes.box}>
      {completionMessage}
      <Typography variant='caption' className={classes.textLeft}>
        Game difficulty:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {difficulty}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Rows completed:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {numRowsDone}/{props.boardSize}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Columns completed:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {numColsDone}/{props.boardSize}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Boxes completed:
      </Typography>
      <Typography variant='caption' className={classes.textRight}>
        {numBoxsDone}/{props.boardSize}
      </Typography>
      <br />
      <Typography variant='caption' className={classes.textLeft}>
        Empty tiles remaining:
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
    gameDifficulty: state.game.gameDifficulty,
    completionData: state.game.completionData,
    boardSize: state.game.boardSize
  }
}

export default connect(
  mapStateToProps,
  null
)(StatsTracker)
