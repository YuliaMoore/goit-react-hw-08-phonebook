import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/auth';

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const data = await api.createUser(credentials);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const loginUser = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await api.loginUser(credentials);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    const data = await api.logOutUser();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await api.fetchCurrentUser(persistedToken);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
