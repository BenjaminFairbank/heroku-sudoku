const initialState = {
  darkMode: true
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_DARK_MODE:
      return {...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

const toggleDarkMode = () => {
  return {
    type: TOGGLE_DARK_MODE
  }
}

export {
  app,
  toggleDarkMode
}
