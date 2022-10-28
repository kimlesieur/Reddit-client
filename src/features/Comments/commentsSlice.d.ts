import { RootState } from '../../app/store';
declare type AsyncThunkConfig = {
    state: RootState;
    rejectValue: string | unknown;
};
export declare const loadComments: import("@reduxjs/toolkit").AsyncThunk<any, Post, AsyncThunkConfig>;
export declare const commentsSlice: import("@reduxjs/toolkit").Slice<CommentsState, {}, "comments">;
declare const _default: import("redux").Reducer<CommentsState, import("redux").AnyAction>;
export default _default;
export declare const selectComments: (state: RootState) => any;
export declare const isLoading: (state: RootState) => boolean;
export declare const error: (state: RootState) => boolean;
