import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  email: '',
  password:''
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email= action.payload.email
      state.password= action.payload.password
    },

  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer