import { combineReducers } from 'redux'

import { app } from '../modules/app'
import { game } from '../modules/game'
import { alertMessage } from '../modules/alertMessage'

const rootReducer = combineReducers({
  app,
  game,
  alertMessage
})

export default rootReducer
