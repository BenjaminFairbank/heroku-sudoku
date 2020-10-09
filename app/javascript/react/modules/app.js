const initialState = {
  darkMode: true
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_MODE:
      const switchedMode = !state.darkMode
      return {...state, darkMode: switchedMode }
    default:
      return state
  }
}

const SWITCH_MODE = 'SWITCH_MODE'

const switchLighting = () => {
  return {
    type: SWITCH_MODE
  }
}

export {
  app,
  switchLighting
}
