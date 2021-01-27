import React from 'react'
import { connect } from 'react-redux'

import { toggleNotesMode } from '../../modules/game'
import { toggleMenuMode } from '../../modules/game'
import { toggleUpdateNotesMode } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 10,
    padding: '0 10px',
    backgroundColor: theme.palette.quaternary.main,
  },
  outerBox: {
    height: 26,
  },
  title: {
    height: 26,
    fontWeight: 'bold',
    color: 'white',
    float: 'left',
    paddingTop: 3
  },
  switchBox: {
    float: 'right',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    display: 'inline-block',
    paddingTop: 4,
  },
}))

const SwitchesCard = props => {
  const classes = useStyles()

  const modeSwitches = [
    {
      id: 1,
      title: 'Note-Taking Mode',
      checked: props.noteTakingMode,
      onChange: props.toggleNotesMode,
    },
    {
      id: 2,
      title: 'Auto-Update Notes',
      checked: props.autoUpdateNotesMode,
      onChange: props.toggleUpdateNotesMode,
    },
    {
      id: 3,
      title: 'Shortlist-Selection Mode',
      checked: props.easyMenuMode,
      onChange: props.toggleMenuMode,
    },
  ]

  const switchesDisplay = modeSwitches.map((mode) => {
    return (
      <Box key={mode.id} className={classes.outerBox}>
        <Typography variant='subtitle2' className={classes.title}>
          {mode.title}
        </Typography>
        <Box className={classes.switchBox}>
          <Typography variant='caption' className={classes.text}>
            OFF
          </Typography>
          <Switch
            checked={mode.checked}
            onChange={mode.onChange}
            color="secondary"
            inputProps={{ "aria-label": "primary checkbox" }}
            size='small'
          />
          <Typography variant='caption' className={classes.text}>
            ON
          </Typography>
        </Box>
      </Box>
    )
  })

  return <Card className={classes.card}>{switchesDisplay}</Card>
}

const mapStateToProps = (state) => {
  return {
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
)(SwitchesCard)
