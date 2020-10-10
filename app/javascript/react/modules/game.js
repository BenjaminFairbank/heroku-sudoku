import { displayAlertMessage } from './alertMessage.js'

const initialState = {
  boardSize: 9,
  gameDifficulty: 1,
  gameBody: [],
  isFetching: false
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case SET_SIZE:
      return {...state, boardSize: action.size }
    case SET_DIFFICULTY:
      return {...state, gameDifficulty: action.difficulty }
    case POST_GAME_REQUEST:
      return {...state, isFetching: true }
    case POST_GAME_REQUEST_SUCCESS:
      return {...state,
        gameBody: action.gameBody,
        isFetching: false
      }
    case POST_GAME_REQUEST_FAILURE:
      return {...state, isFetching: false }
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

const POST_GAME_REQUEST = 'POST_GAME_REQUEST'

const postGameRequest = () => {
  return {
    type: POST_GAME_REQUEST
  }
}

const POST_GAME_REQUEST_SUCCESS = 'POST_GAME_REQUEST_SUCCESS'

const postGameRequestSuccess = gameBody => {
  return {
    type: POST_GAME_REQUEST_SUCCESS,
    gameBody
  }
}

const POST_GAME_REQUEST_FAILURE = 'POST_GAME_REQUEST_FAILURE'

const postGameRequestFailure = () => {
  return {
    type: POST_GAME_REQUEST_FAILURE
  }
}


const postGame = (gameData) => {
  return dispatch => {
    dispatch(postGameRequest())

    return fetch(`/api/v1/games.json`,
      {
        method: 'POST',
        body: JSON.stringify(gameData),
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(postGameRequestFailure())
        dispatch(displayAlertMessage("Something went wrong."))
       return { error: 'Something went wrong.' }
      }
    })
    .then(gameBody => {
      if(!gameBody.error) {
        dispatch(postGameRequestSuccess(gameBody))
      }
    })
  }
}

export {
  game,
  setSize,
  setDifficulty,
  postGame
}
