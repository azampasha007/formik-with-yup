import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../feature/login/loginSlice'
export const store = configureStore({
  reducer: {
    login: loginSlice
  },
})

