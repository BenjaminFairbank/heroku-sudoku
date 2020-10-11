import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { postGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';

import BoardNineByNine from '../ui/BoardNineByNine'
import BoardFourByFour from '../ui/BoardFourByFour'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 100,
  },
  box: {
    height: 340,
    width: 340,
    margin: 'auto',
  },
}));

const Play = props => {
  const classes = useStyles();

  useEffect(() => {
    props.postGame({
      board_size: props.boardSize,
      game_difficulty: props.gameDifficulty
    })
  }, [])

  let board
  if (props.boardSize === 9) {
    board = <BoardNineByNine />
  } else {
    board = <BoardFourByFour />
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        {board}
      </Box>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    boardSize: state.game.boardSize,
    gameDifficulty: state.game.gameDifficulty,
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
