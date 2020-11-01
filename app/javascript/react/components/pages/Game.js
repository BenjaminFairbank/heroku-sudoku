import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Box } from '@material-ui/core'

import StatsTracker from '../ui/StatsTracker'
import Board from '../ui/Board'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
  },
  box: {
    width: 400,
    margin: 'auto',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
}))

const Game = props => {
  const classes = useStyles()

  useEffect(() => { props.getGame(props.match.params.id) }, [])

  return (
    <Box className={classes.container}>
      <Box className={classes.box}>
        <Card className={classes.card}>
          <Board />
          <StatsTracker />
        </Card>
      </Box>
    </Box>
  )
}

const mapDispatchToProps = dispatch => {
  return { getGame: (gameId) => dispatch(getGame(gameId)) }
}

export default connect(
  null,
  mapDispatchToProps
)(Game)
