import { displayAlertMessage } from './alertMessage.js'
import squareCounter from '../functions/squareCounter'
import organizeBoard from '../functions/organizeBoard'
import completionChecker from '../functions/completionChecker'

const initialState = {
  boardSize: 9,
  gameDifficulty: 1,
  gameBody: { rows: [] },
  gameId: null,
  isFetching: false,
  easyMenuMode: false,
  noteTakingMode: false,
  percentageCompleted: 0,
  squaresLeft: 0,
  completionData: null
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
        gameId: action.gameId,
        isFetching: false
      }
    case POST_GAME_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case UPDATE_BOARD:
      let board = state.gameBody
      const square = board.rows[action.boardData.y].squares[action.boardData.x]
      if (state.noteTakingMode) {
        let notesArray = square.notes.split('')
        if (notesArray.includes(action.boardData.value)) {
          notesArray.splice(parseInt(action.boardData.value) - 1, 1, '.')
        } else {
          notesArray.splice(parseInt(action.boardData.value) - 1, 1, action.boardData.value)
        }
        square.notes = notesArray.join('')
      } else {
        square.value = action.boardData.value
        square.notes = Array(state.boardSize).fill('.').join('')
      }
      const updatedStats = squareCounter(board)
      const compData = completionChecker(state.gameBody, state.boardSize)
      return {...state,
        gameBody: board,
        percentageCompleted: updatedStats.percentageCompleted,
        squaresLeft: updatedStats.squaresLeft,
        completionData: compData
      }
    case GET_GAME_REQUEST:
      return {...state, isFetching: true }
    case GET_GAME_REQUEST_SUCCESS:
      const orgGame = organizeBoard(action.gameBody)
      const initialStats = squareCounter(orgGame)
      return {...state,
        gameBody: orgGame,
        boardSize: action.gameBody.rows.length,
        isFetching: false,
        percentageCompleted: initialStats.percentageCompleted,
        squaresLeft: initialStats.squaresLeft,
        gameDifficulty: action.gameBody.game_difficulty
      }
    case GET_GAME_REQUEST_FAILURE:
      return {...state, isFetching: false }
    case RESET_GAME:
      return initialState
    case TOGGLE_MENU_MODE:
      return {...state, easyMenuMode: !state.easyMenuMode }
    case TOGGLE_NOTES_MODE:
      return {...state, noteTakingMode: !state.noteTakingMode }
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

const postGameRequestSuccess = gameId => {
  return {
    type: POST_GAME_REQUEST_SUCCESS,
    gameId
  }
}

const POST_GAME_REQUEST_FAILURE = 'POST_GAME_REQUEST_FAILURE'

const postGameRequestFailure = () => {
  return {
    type: POST_GAME_REQUEST_FAILURE
  }
}

const UPDATE_BOARD = 'UPDATE_BOARD'

const updateBoard = boardData => {
  return {
    type: UPDATE_BOARD,
    boardData
  }
}

const GET_GAME_REQUEST = 'GET_GAME_REQUEST'

const getGameRequest = () => {
  return {
    type: GET_GAME_REQUEST
  }
}

const GET_GAME_REQUEST_SUCCESS = 'GET_GAME_REQUEST_SUCCESS'

const getGameRequestSuccess = gameBody => {
  return {
    type: GET_GAME_REQUEST_SUCCESS,
    gameBody
  }
}

const GET_GAME_REQUEST_FAILURE = 'GET_GAME_REQUEST_FAILURE'

const getGameRequestFailure = () => {
  return {
    type: GET_GAME_REQUEST_FAILURE
  }
}

const RESET_GAME = 'RESET_GAME'

const resetGame = () => {
  return {
    type: RESET_GAME
  }
}

const TOGGLE_MENU_MODE = 'TOGGLE_MENU_MODE'

const toggleMenuMode = () => {
  return {
    type: TOGGLE_MENU_MODE
  }
}

const TOGGLE_NOTES_MODE = 'TOGGLE_NOTES_MODE'

const toggleNotesMode = () => {
  return {
    type: TOGGLE_NOTES_MODE
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
        dispatch(displayAlertMessage('Something went wrong while fetching data.'))
       return { error: 'Something went wrong while fetching data.' }
      }
    })
    .then(gameBody => {
      if(!gameBody.error) {
        dispatch(postGameRequestSuccess(gameBody.id))
      } else {
        dispatch(postGameRequestFailure())
        dispatch(displayAlertMessage(gameBody.error))
      }
    })
  }
}

const getGame = (gameId) => {
  return dispatch => {
    dispatch(getGameRequest())

    return fetch(`/api/v1/games/${gameId}.json`,
      {
        method: 'GET',
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      }
    )
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        dispatch(getGameRequestFailure())
        dispatch(displayAlertMessage('Something went wrong while fetching data.'))
       return { error: 'Something went wrong while fetching data.' }
      }
    })
    .then(gameBody => {
      if(!gameBody.error) {
        dispatch(getGameRequestSuccess(gameBody))
      } else {
        dispatch(getGameRequestFailure())
        dispatch(displayAlertMessage(gameBody.error))
      }
    })
  }
}

export {
  game,
  setSize,
  setDifficulty,
  postGame,
  updateBoard,
  getGame,
  resetGame,
  toggleMenuMode,
  toggleNotesMode
}
