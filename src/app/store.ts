import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from '../features/Posts/postsSlice';
import subredditsReducer from '../features/Subreddits/subredditsSlice';
import commentsReducer from '../features/Comments/commentsSlice';


export const store = configureStore({
  reducer: {
    posts: postsSliceReducer,
    subreddits: subredditsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;