import { RootState } from '../../app/store';
declare type AsyncThunkConfig = {
    state: RootState;
    rejectValue: string | unknown;
};
export declare const loadSubreddits: import("@reduxjs/toolkit").AsyncThunk<Subreddit[], void, AsyncThunkConfig>;
export declare const subredditSlice: import("@reduxjs/toolkit").Slice<SubredditState, {}, "subreddits">;
export declare const selectSubredddits: (state: RootState) => any;
export declare const isLoading: (state: RootState) => boolean;
export declare const isError: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<SubredditState, import("redux").AnyAction>;
export default _default;
