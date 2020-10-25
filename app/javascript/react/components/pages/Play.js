import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { postGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Card } from '@material-ui/core'

import LoadingCard from '../ui/LoadingCard'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 100,
  },
  box: {
    height: 340,
    width: 340,
    margin: 'auto',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  gridContainer: {
    height: 320,
    width: 320,
    margin: 'auto',
  },
}))

const Play = props => {
  const classes = useStyles()

  useEffect(() => {
    props.postGame({
      board_size: props.boardSize,
      game_difficulty: props.gameDifficulty
    })
  }, [])

  let display =
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Card className={classes.card}>
          <Box className={classes.gridContainer}>
            <LoadingCard />
          </Box>
        </Card>
      </Box>
    </Container>

  if ( props.gameId !== null && !props.isFetching) {
    display = <Redirect to={`/games/${props.gameId}`} />
  }

  return (
    <>{display}</>
  )
}

const mapStateToProps = (state) => {
  return {
    boardSize: state.game.boardSize,
    gameDifficulty: state.game.gameDifficulty,
    isFetching: state.game.isFetching,
    gameId: state.game.gameId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postGame: (gameData) => dispatch(postGame(gameData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Play)
