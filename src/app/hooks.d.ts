import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "./store";
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    posts: PostsState;
    subreddits: SubredditState;
    comments: CommentsState;
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
