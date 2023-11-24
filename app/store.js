import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/navSlice'
import questionReducer from '../features/questionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    queis: questionReducer,
  },
})