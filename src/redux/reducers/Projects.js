import { GET_PROJECTS } from '../actions/actions'

const initialState = {
  content: [],
}

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default projectsReducer
