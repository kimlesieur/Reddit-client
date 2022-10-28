import './Posts.css';
import Post from '../../components/Post/Post';
import Comments from '../Comments/Comments';

import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {selectPosts, selectSubreddit, loadPosts, isLoading} from './postsSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';


const Posts = () => {
    const dispatch = useAppDispatch();
    const posts: Post = useAppSelector(selectPosts);
    const selectedSubreddit = useAppSelector(selectSubreddit);
    const loading = useAppSelector(isLoading);

    useEffect(()=>{
        dispatch(loadPosts(selectedSubreddit));
    },[selectedSubreddit, dispatch] );

    if (loading) {
        return <div>loading state</div>;
      }

return ( 
    <Container maxWidth="md">
        
            {Object.values(posts).map((post: Post, index: number) => {
                return (
                    <Card sx={{ height: '100%', m:2 }} key={index} >
                        <Grid container sx={{}}>
                            <Post
                            key={index}
                            post={post}
                            index={index}
                            />
                            <Comments postName={post.name} showingComments={post.showingComments} />
                        </Grid>
                    </Card>
                )
            })}
            
    </Container>
    );
};

export default Posts;

