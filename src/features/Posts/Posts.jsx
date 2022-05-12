import './Posts.css';
import Post from '../../components/Post/Post';
import Comments from '../../features/Comments/Comments';

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectPosts, selectSubreddit, isError, loadPosts, isLoading} from './postsSlice';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';


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
    <Container maxWidth="md">
        
            {Object.values(posts).map((post, index) => {
                return <Card sx={{ height: '100%', m:2 }} >
                    <Grid container sx={{}}>
                        <Post
                        key={post.id}
                        post={post}
                        index={index}
                        />
                        <Comments numComments={post.num_comments} postId={post.id} postName={post.name} permalink={post.permalink} showingComments={post.showingComments} index={index} />
                    </Grid>
                </Card>
                    
            })}
            
    </Container>
    );
};

export default Posts;

