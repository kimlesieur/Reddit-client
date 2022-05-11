import './Posts.css';
import Post from '../../components/Post/Post';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectPosts, selectSubreddit, isError, loadPosts, isLoading} from './postsSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const selectedSubreddit = useSelector(selectSubreddit);
    const loading = useSelector(isLoading);
    const error = useSelector(isError);


    useEffect(()=>{
        dispatch(loadPosts(selectedSubreddit));
    },[selectedSubreddit] );

    if (loading) {
        return <div>loading state</div>;
      }

return ( 
    <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {Object.values(posts).map((post, index) => {
                return <Post
                    key={post.id}
                    post={post}
                    index={index}
                />
            })}
        </Grid>
    </Container>
    );
};

export default Posts;

