interface Post {
    [key: string]: any
}

interface Comment {
    [key: string]: any
}

interface Subreddit {
    [key: string]: any
}

interface PostsState {
    postsList: any,
    error: boolean,
    isLoading: boolean, 
    selectedSubreddit: string,
    searchTerm: string,
}

interface CommentsState {
    commentsList: Array,
    isLoading: boolean, 
    error: boolean
}

interface SubredditState {
    subredditsList: Array,
    error: boolean,
    isLoading: boolean, 
}