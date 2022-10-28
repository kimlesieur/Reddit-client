import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../app/store';
import { arrayFilter } from '../../utils/utils';

type AsyncThunkConfig = {
    state: RootState,
    rejectValue: string | unknown,
};

export const loadPosts = createAsyncThunk<Post, string, AsyncThunkConfig>(
    'posts/loadPosts',
    async (subreddit) => {
        const res = await fetch(`https://www.reddit.com/${subreddit}.json`);
        const data = await res.json();
        return data.data.children.map((post: Post) => 
            ({...post.data, showingComments: false})
        );
    }
);

export const handleSearch = (value: string) => {
    return (dispatch: AppDispatch, getState: () => RootState) => {
        const state = getState();
        dispatch(setSearchTerm(value));
        const postsList = state.posts.postsList;
        let search = arrayFilter(postsList, state.posts.searchTerm);
        dispatch(setPostsList(search));
        if(state.posts.searchTerm.length < 2) {
            dispatch(loadPosts(state.posts.selectedSubreddit));
        }
    } 
};

const initialState: PostsState = {
    postsList: {},
    error: false,
    isLoading: false, 
    selectedSubreddit: 'r/home',
    searchTerm: '',
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
        },
        toggleShowingComments(state, action) {
            const index = action.payload;      
            state.postsList[index].showingComments = !state.postsList[index].showingComments;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        setPostsList(state, action) {
            state.postsList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = false;
                state.postsList = action.payload;
            })
            .addCase(loadPosts.rejected, (state) => {
                state.isLoading = false;
                state.error = false;
                state.postsList = [];
            })
    }
});


export const {setSubreddit, toggleShowingComments, setSearchTerm, setPostsList} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.postsList;
export const selectSubreddit = (state: RootState) => state.posts.selectedSubreddit;
export const isLoading = (state: RootState) => state.posts.isLoading;
export const isError = (state: RootState) => state.posts.error;

export default postsSlice.reducer;
