import { configureStore } from '@reduxjs/toolkit';
import addTestReducer from './TestReducer';

export const store = configureStore({
  reducer: {
    tests: addTestReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
