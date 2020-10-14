import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@material-ui/core'

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

const Board = props => {
  const classes = useStyles()

  if (props.gameBody === null || props.gameBody.id !== props.match.params.id) {
    useEffect(() => {
      props.getGame(props.match.params.id)
    }, [])
  }

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

const mapStateToProps = state => {
  return {
    gameBody: state.game.gameBody,
    boardSize: state.game.boardSize,
  }
}

const mapDispatchToProps = dispatch => {
  return {    
    getGame: (gameId) => dispatch(getGame(gameId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
