import { combineReducers, configureStore } from '@reduxjs/toolkit'

import languageReducer from '../reducers/Language'

const bigReducer = combineReducers({ Language: languageReducer })
const store = configureStore({
  reducer: bigReducer,
})

export default store
