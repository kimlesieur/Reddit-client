import { AppDispatch, RootState } from '../../app/store';
declare type AsyncThunkConfig = {
    state: RootState;
    rejectValue: string | unknown;
};
export declare const loadPosts: import("@reduxjs/toolkit").AsyncThunk<Post, string, AsyncThunkConfig>;
export declare const handleChangeValue: (value: string) => (dispatch: AppDispatch, getState: () => RootState) => void;
export declare const postsSlice: import("@reduxjs/toolkit").Slice<PostsState, {
    setSubreddit(state: import("immer/dist/internal").WritableDraft<PostsState>, action: {
        payload: any;
        type: string;
    }): void;
    toggleShowingComments(state: import("immer/dist/internal").WritableDraft<PostsState>, action: {
        payload: any;
        type: string;
    }): void;
    setSearchTerm(state: import("immer/dist/internal").WritableDraft<PostsState>, action: {
        payload: any;
        type: string;
    }): void;
    setPostsList(state: import("immer/dist/internal").WritableDraft<PostsState>, action: {
        payload: any;
        type: string;
    }): void;
}, "posts">;
export declare const setSubreddit: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, toggleShowingComments: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, setSearchTerm: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, setPostsList: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export declare const selectPosts: (state: RootState) => any;
export declare const selectSubreddit: (state: RootState) => string;
export declare const isLoading: (state: RootState) => boolean;
export declare const isError: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<PostsState, import("redux").AnyAction>;
export default _default;
