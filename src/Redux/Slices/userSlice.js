import { createSlice } from '@reduxjs/toolkit';

import { userApi } from '@Redux/APIEndpoints/userEndpoints';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuth: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
        const user = action.payload.user;

        if (user) {
          state.user = action.payload.user;
          state.isAuth = true;
        }
      })
      .addMatcher(userApi.endpoints.signIn.matchFulfilled, (state, action) => {
        const token = action.payload.token;
        if (token) {
          state.isAuth = true;
          localStorage.setItem('token', token);
        }
      })
      .addMatcher(userApi.endpoints.signUp.matchFulfilled, (state, action) => {
        const token = action.payload.token;
        if (token) {
          state.isAuth = true;
          localStorage.setItem('token', token);
        }
      });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
