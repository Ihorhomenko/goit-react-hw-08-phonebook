import { createSlice } from '@reduxjs/toolkit';
import operations from './authOperation';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [operations.fetchCurrentUser.pending](state) {
    //   state.isFetchingCurrentUser = true;
    // },
    // [operations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isFetchingCurrentUser = false;
    // },
    // [operations.fetchCurrentUser.rejected](state) {
    //   state.isFetchingCurrentUser = false;
    // },
  },
});
