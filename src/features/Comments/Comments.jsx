import './Comments.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comment from '../../components/Comment/Comment';
import { toggleShowingComments } from '../Posts/postsSlice';
import { selectComments, isLoading, error, loadComments } from './commentsSlice';

import Grid from '@mui/material/Grid';
import { grey } from '@mui/material/colors';


const Comments = ({numComments, postId, postName, permalink, showingComments, index}) => {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const loading = useSelector(isLoading);
    const isError = useSelector(error);

    /*
    const commentsById = (id) => {
        const obj = Object.fromEntries(Object.entries(comments).filter(key => key.includes(id)));
        return obj;
    }
    */

    const filterCommentsById = (name) => {
        const commentsList = Object.values(comments).filter(obj => obj.parent_id === name);
            console.log(`This is the comment lists filtered :`)
            console.log(commentsList);
        return commentsList;
        
    };


    return (
        <Grid container sx={{backgroundColor: '#0788bf'}}>
            {/*
            <button
                type="button"
                aria-label="Show comments"
                onClick={() => {
                    dispatch(loadComments({permalink: permalink, postId: postId}));
                }}
                >
                Comments
            </button>
            */}
            <span className="post-comments-container">
                {showingComments && 
                <div>
                    {Object.values(filterCommentsById(postName)).map((comment, index) => {
                        return <Comment 
                                    key={index}
                                    comments={comment} 
                                />
                    })}
                  
                </div>
                }
            </span>
        </Grid>

    );
};

export default Comments;