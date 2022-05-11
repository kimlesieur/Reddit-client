import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (subreddit) => {
        const res = await fetch(`https://www.reddit.com/${subreddit}.json`);
        const data = await res.json();
        return data.data.children.map(post => 
            ({...post.data, showingComments: false})
            );
    }
);


/*
export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (index, permalink, {getState}) => {
        const postsList = getState().postsList;
        postsList[index].showingComments = !postsList[index].showingComments;
        if(!postsList[index].showingComments){return}
        const res = await fetch(`https://www.reddit.com${permalink}.json`);
        const data = res.json();
        return data[1].data.children.map(comment => comment.data);
    }
)
*/


/* 
//Faire un test avec une autre méthode : ajouter les propriétés pour commentaires avec un autre async thunk
export const fetchComments = createAsyncThunk(
    'posts/fetchComments',
    async (index, permalink, {getState}) => {
        const postsList = getState().postsList;
        postsList.map(post => ({...post,  }));
    }
)
*/


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: {},
        error: false,
        isLoading: false, 
        selectedSubredddit: 'r/home',
        searchTerm: '',
    
    },
    reducers: {
        setSubreddit(state, action) {
            state.selectedSubredddit = action.payload;
        },
        toggleShowingComments(state, action) {
            const index = action.payload;      
            state.postsList[index].showingComments = !state.postsList[index].showingComments;
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
                //state.postsList = action.payload.map(post => ({[post.id]: post}));
                /*
                action.payload.map(post => {
                    const id = post.id;
                    state.postsList[id] = {...post}
                });
                */

            })
            .addCase(loadPosts.rejected, (state) => {
                state.isLoading = false;
                state.error = false;
                state.postsList = [];
            })
    }
});


export const {setSubreddit, toggleShowingComments} = postsSlice.actions;

export const selectPosts = (state) => state.posts.postsList;
export const selectSubreddit = (state) => state.posts.selectedSubredddit;
export const isLoading = state => state.posts.isLoading;
export const isError = state => state.posts.error;

export default postsSlice.reducer;
