import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loadSubreddits = createAsyncThunk(
    'subreddits/loadSubreddits',
    async () => {
        const res = await fetch(`https://www.reddit.com/subreddits.json?limit=10`);
        const data = await res.json();
        return data.data.children.map(subreddit => subreddit.data);
    }
);

export const subredditSlice = createSlice({
    name:'subreddits',
    initialState:{
        subredditsList: [],
        error: false,
        isLoading: false, 
    },
    reducers: {

    }, 
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

export const selectSubredddits = state => state.subreddits.subredditsList;
export const isLoading = state => state.posts.isLoading;
export const isError = state => state.posts.error;

export default subredditSlice.reducer;