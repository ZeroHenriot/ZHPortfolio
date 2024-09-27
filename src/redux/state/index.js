import { combineReducers, configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../reducers/Projects'
import experiencesReducer from '../reducers/Experiences'

const bigReducer = combineReducers({
  projects: projectsReducer,
  experiences: experiencesReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
