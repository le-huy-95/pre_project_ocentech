import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { LoginApi } from './Login'
import { LoginResponse } from '../../interface/login'



const initialSate: { user: LoginResponse } = {
  user: {
    access_token: '',
    token_type: '',
    refresh_token: '',
    expires_in: 0,
    scope: '',
    organization: ''
  }
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: initialSate,
  reducers: {
    refreshUser: (state, { payload }) => {
      state.user = payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(LoginApi.endpoints.login.matchFulfilled), (state, { payload }) => {
      if (payload) {
        state.user = payload
      }
    })
    // builder.addCase()
  }
})
export const {refreshUser} = AuthSlice.actions
export default AuthSlice.reducer
