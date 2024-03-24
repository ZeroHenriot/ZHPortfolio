import { ITALIAN_LANGUAGE } from '../actions/actions'

// reducers/Language.js
const initialState = {
  lang: false,
}

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITALIAN_LANGUAGE: // Usa la costante per il tipo di azione
      return {
        ...state,
        lang: action.payload, // Aggiorna il campo corretto
      }
    default:
      return state
  }
}

export default languageReducer
