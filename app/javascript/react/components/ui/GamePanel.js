import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Switch, Box, Card } from '@material-ui/core'

import SwitchesCard from './SwitchesCard'
import StatsCard from './StatsCard'

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
  statsCard: {
    marginTop: 10,
    padding: '5px 10px 3px 10px',
    backgroundColor: theme.palette.quaternary.main,
  },
}))

const GamePanel = props => {
  const classes = useStyles()

  let completionMessage
  let textClass = classes.notCompleted
  let message = 'All tiles have been filled but there are conflicts!'

  if (props.completionData && props.completionData.completed) {
    textClass = classes.completed
    message = 'Congratulations! You solved the puzzle!'
  }

  if (props.squaresLeft === 0) {
    completionMessage =
      <Typography variant='subtitle2' className={textClass}>
        {message}
      </Typography>
  }

  return (
    <>
      {completionMessage}
      <SwitchesCard />
      <StatsCard />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    squaresLeft: state.game.squaresLeft,
    completionData: state.game.completionData
  }
}

export default connect(
  mapStateToProps,
  null
)(GamePanel)
