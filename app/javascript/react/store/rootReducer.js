import { combineReducers } from 'redux'

import { game } from '../modules/game'
import { app } from '../modules/app'

const rootReducer = combineReducers({
  app,
  game
})

export default rootReducer
