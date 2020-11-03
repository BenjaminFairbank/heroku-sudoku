import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Card } from '@material-ui/core'

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
  statsCard: {
    marginTop: 10,
    padding: '5px 10px 3px 10px',
    backgroundColor: theme.palette.quaternary.main,
  },
}))

const StatsCard = props => {
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

  if (props.completionData) {
    numBoxsDone = props.completionData.boxes.filter(box => box === true).length
    numRowsDone = props.completionData.rows.filter(row => row === true).length
    numColsDone = props.completionData.columns.filter(col => col === true).length
  }

  let trackedStats = [
    {
      id: 1,
      title: 'Game difficulty:',
      value: difficulty
    },
    {
      id: 2,
      title: 'Rows completed:',
      value: `${numRowsDone}/${props.boardSize}`
    },
    {
      id: 3,
      title: 'Columns completed:',
      value: `${numColsDone}/${props.boardSize}`
    },
    {
      id: 4,
      title: 'Boxes completed:',
      value: `${numBoxsDone}/${props.boardSize}`
    },
    {
      id: 5,
      title: 'Empty tiles remaining:',
      value: props.squaresLeft
    },
    {
      id: 6,
      title: 'Percentage completed:',
      value: `${props.percentageCompleted}%`
    },
  ]

  let statsDisplay = trackedStats.map((stat) => {
    return (
      <Fragment key={stat.id}>
        <Typography variant='caption' className={classes.textLeft}>
          {stat.title}
        </Typography>
        <Typography variant='caption' className={classes.textRight}>
          {stat.value}
        </Typography>
        <br />
      </Fragment>
    )
  })

  return <Card className={classes.statsCard}>{statsDisplay}</Card>
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
)(StatsCard)
