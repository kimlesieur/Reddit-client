import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type AsyncThunkConfig = {
    state: RootState,
    rejectValue: string | unknown,
};

export const loadComments = createAsyncThunk<any, Post, AsyncThunkConfig>(
    'comments/loadComments',
    async ({permalink}, thunkAPI) => {
        const res = await fetch(`https://www.reddit.com${permalink}.json`);
        const data = await res.json();
        return data[1].data.children.map((comment: Comment) => comment.data);
    }
);

const initialState: CommentsState = {
        commentsList: {},
        isLoading: false, 
        error: false
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        .addCase(loadComments.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(loadComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = false;
            state.commentsList = action.payload;
        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoading = false;
            state.error = false;
            state.commentsList = [];
        })

    }
});



export default commentsSlice.reducer;

export const selectComments = (state: RootState) => state.comments.commentsList;
export const isLoading = (state: RootState) => state.comments.isLoading;
export const error = (state: RootState) => state.comments.error;