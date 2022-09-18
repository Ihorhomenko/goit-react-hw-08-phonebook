import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';
import {authSlice} from './authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
      filter: filterSlice.reducer,
      auth: persistReducer(authPersistConfig, authSlice.reducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  })

export const persistor = persistStore(store);