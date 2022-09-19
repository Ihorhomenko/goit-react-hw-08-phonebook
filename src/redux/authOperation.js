import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api/api';

const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      api.token.set(result.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      api.token.set(result.token);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);


const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await api.logOut();
    api.token.unset();
  } catch (error) {
    
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    api.token.set(persistedToken);
    try {
      const result = await api.currentUser();
      return result;
    } catch (error) {
  
    }
  },
);

const operations = {
  register,
  logOut,
  login,
  fetchCurrentUser,
};

export default operations;
