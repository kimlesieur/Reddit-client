export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    posts: PostsState;
    subreddits: SubredditState;
    comments: CommentsState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    posts: PostsState;
    subreddits: SubredditState;
    comments: CommentsState;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
