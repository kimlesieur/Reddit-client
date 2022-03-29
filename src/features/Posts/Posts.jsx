import './Posts.css';
import Post from '../Post/Post';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectPosts, selectSubreddit, isError, loadPosts, isLoading} from './postsSlice';

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
    <div>
        <div className="post-wrapper">
            {Object.values(posts).map((post, index) => {
                return <Post
                    key={post.id}
                    post={post}
                    index={index}
                />
            })}
        </div>
    </div>
    );
};

export default Posts;