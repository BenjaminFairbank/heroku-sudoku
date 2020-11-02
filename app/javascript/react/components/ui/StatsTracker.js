import React from 'react'
import { connect } from 'react-redux'

import { toggleNotesMode } from '../../modules/game'
import { toggleMenuMode } from '../../modules/game'
import { toggleUpdateNotesMode } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Switch, Box, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  textLeft: {
    fontWeight: 'bold',
    color: 'white',
    float: 'left',
  },
  textRight: {
    fontWeight: 'bold',
    color: 'white',
    float: 'right',
  },
  completed: {
    marginTop: 10,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notCompleted: {
    marginTop: 10,
    color: theme.palette.quinary.main,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  switchBox: {
    float: 'right',
  },
  switchText: {
    fontWeight: 'bold',
    color: 'white',
    display: 'inline-block',
    paddingTop: 4,
  },
  switchTitle: {
    height: 38,
    fontWeight: 'bold',
    color: 'white',
    float: 'left',
    paddingTop: 10,
  },
  switchesCard: {
    marginTop: 10,
    padding: '0 10px',
    backgroundColor: theme.palette.quaternary.main,
  },
  statsCard: {
    marginTop: 10,
    padding: '5px 10px 3px 10px',
    backgroundColor: theme.palette.quaternary.main,
  },
  outerSwitchBox: {
    height: 38,
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
            All tiles have been filled but there are conflicts!
          </Typography>
      }
    }
  }

  return (
    <>
      {completionMessage}
      <Card className={classes.switchesCard}>
        <Box className={classes.outerSwitchBox}>
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
        </Box>
        <Box className={classes.outerSwitchBox}>
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
        </Box>
        <Box className={classes.outerSwitchBox}>
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
        </Box>
      </Card>
      <Card className={classes.statsCard}>
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
      </Card>
    </>
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
