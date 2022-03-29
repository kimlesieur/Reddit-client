import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';



export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async ({permalink, postId}, thunkAPI) => {
        const res = await fetch(`https://www.reddit.com${permalink}.json`);
        const data = await res.json();
        const id = postId;
        return data[1].data.children.map(comment => comment.data);
    }
);


export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsList: {},
        isLoading: false, 
        error: false
    },
    reducers:{

    },
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
            /*
            const postId = action.meta.arg.postId;
            state.commentsList[postId] = {};
            action.payload.map(comment => {
                const id = comment.id;
                state.commentsList[postId][id] = {...comment}
            });
            */

        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoading = false;
            state.error = false;
            state.postsList = [];
        })

    }
});



export default commentsSlice.reducer;

export const selectComments = state => state.comments.commentsList;
export const isLoading = state => state.comments.isLoading;
export const error = state => state.comments.error;