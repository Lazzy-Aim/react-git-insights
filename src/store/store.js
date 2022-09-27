import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import githubSlice from './github/githubSlice';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    favorite: githubSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

