import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/navSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})