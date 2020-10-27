import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { postGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Card } from '@material-ui/core'

import LoadingCard from '../ui/LoadingCard'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
  },
  box: {
    height: 400,
    width: 400,
    margin: 'auto',
  },
  card: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: theme.palette.tertiary.main,
  },
  innerBox: {
    height: 380,
    width: 380,
    margin: 'auto',
  },
}))

const New = props => {
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
          <Box className={classes.innerBox}>
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
)(New)
