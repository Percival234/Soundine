import { combineReducers } from '@reduxjs/toolkit';

import { api } from '../API/API';

import userReducer from '../Slices/userSlice';
import playerReducer from '../Slices/playerSlice';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  user: userReducer,
  player: playerReducer,
});
