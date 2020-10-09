const initialState = {
  boardSize: 9,
  gameDifficulty: 1
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case SET_SIZE:
      return {...state, boardSize: action.size }
    case SET_DIFFICULTY:
      return {...state, gameDifficulty: action.difficulty }
    default:
      return state
  }
}

const SET_SIZE = 'SET_SIZE'

const setSize = size => {
  return {
    type: SET_SIZE,
    size
  }
}

const SET_DIFFICULTY = 'SET_DIFFICULTY'

const setDifficulty = difficulty => {
  return {
    type: SET_DIFFICULTY,
    difficulty
  }
}

export {
  game,
  setSize,
  setDifficulty
}
