import { combineReducers, configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../reducers/Projects'

const bigReducer = combineReducers({ projects: projectsReducer })

const store = configureStore({
  reducer: bigReducer,
})

export default store
