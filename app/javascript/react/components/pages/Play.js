import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { postGame } from '../../modules/game'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {

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

  let fetch = ''
  if (props.isFetching) {
    fetch = <img
      src="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif"
      alt="loading-icon"
      height="100"
      width="100"
    ></img>
  } else if (props.gameBody !== []) {
    fetch = <Typography variant="h5">{props.gameBody}</Typography>
  }

  return (
    <>
      {fetch}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    boardSize: state.game.boardSize,
    gameDifficulty: state.game.gameDifficulty,
    gameBody: state.game.gameBody,
    isFetching: state.game.isFetching
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
