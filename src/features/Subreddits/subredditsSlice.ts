import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type AsyncThunkConfig = {
    state: RootState,
    rejectValue: string | unknown,
};

export const loadSubreddits = createAsyncThunk<Subreddit[], void, AsyncThunkConfig>(
    'subreddits/loadSubreddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json?limit=10`);
        const data = await res.json();
        return data.data.children.map((subreddit: Subreddit) => subreddit.data);
    }
);

const initialState: SubredditState = {
    subredditsList: [],
    error: false,
    isLoading: false, 
}

export const subredditSlice = createSlice({
    name:'subreddits',
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(loadSubreddits.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(loadSubreddits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.subredditsList = action.payload;
            })
            .addCase(loadSubreddits.rejected, (state) => {
                state.isLoading = false;
                state.error = false;
                state.subredditsList = [];
            })
    }
});

export const selectSubredddits = (state: RootState) => state.subreddits.subredditsList;
export const isLoading = (state: RootState) => state.posts.isLoading;
export const isError = (state: RootState) => state.posts.error;

export default subredditSlice.reducer;