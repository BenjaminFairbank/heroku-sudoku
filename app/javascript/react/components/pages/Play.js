import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const Play = props => {
  const classes = useStyles();

  return (
    <><p>PLAY</p></>
  )
}

const mapStateToProps = (state) => {
  return {
    boardSize: state.game.boardSize,
    gameDifficulty: state.game.gameDifficulty
  }
}

export default connect(
  mapStateToProps,
  null
)(Play)
