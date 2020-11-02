import React from 'react'
import { connect } from 'react-redux'

import { toggleNotesMode } from '../../modules/game'
import { toggleMenuMode } from '../../modules/game'
import { toggleUpdateNotesMode } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Switch, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  box: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
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
  },
  switchBox: {
    float: 'right',
  },
  switchText: {
    fontWeight: 'bold',
    display: 'inline-block',
    paddingTop: 4,
  },
  switchTitle: {
    height: 38,
    fontWeight: 'bold',
    float: 'left',
    paddingTop: 10,
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
            Congratulations! You solved the puzzle!
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
      <Box>
        <Typography variant='subtitle2' className={classes.switchTitle}>
          Note Taking Mode
        </Typography>
        <Box className={classes.switchBox}>
          <Typography variant='caption' className={classes.switchText}>OFF</Typography>
          <Switch
            checked={props.noteTakingMode}
            onChange={props.toggleNotesMode}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        <Typography variant='caption' className={classes.switchText}>ON</Typography>
        </Box>
      </Box><br /><br />
      <Box>
        <Typography variant='subtitle2' className={classes.switchTitle}>
          Auto-Update Notes
        </Typography>
        <Box className={classes.switchBox}>
          <Typography variant='caption' className={classes.switchText}>OFF</Typography>
          <Switch
            checked={props.autoUpdateNotesMode}
            onChange={props.toggleUpdateNotesMode}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        <Typography variant='caption' className={classes.switchText}>ON</Typography>
        </Box>
      </Box><br /><br />
      <Box>
        <Typography variant='subtitle2' className={classes.switchTitle}>
          Shortlist Selection Mode
        </Typography>
        <Box className={classes.switchBox}>
          <Typography variant='caption' className={classes.switchText}>OFF</Typography>
          <Switch
            checked={props.easyMenuMode}
            onChange={props.toggleMenuMode}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        <Typography variant='caption' className={classes.switchText}>ON</Typography>
        </Box>
      </Box><br /><br />
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
    boardSize: state.game.boardSize,
    noteTakingMode: state.game.noteTakingMode,
    easyMenuMode: state.game.easyMenuMode,
    autoUpdateNotesMode: state.game.autoUpdateNotesMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNotesMode: () => dispatch(toggleNotesMode()),
    toggleMenuMode: () => dispatch(toggleMenuMode()),
    toggleUpdateNotesMode: () => dispatch(toggleUpdateNotesMode())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsTracker)
