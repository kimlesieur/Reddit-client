import './Comments.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Comment from '../../components/Comment/Comment';
import { selectComments } from './commentsSlice';

import Stack from '@mui/material/Stack';


const Comments = ({postName, showingComments}) => {
    const comments = useSelector(selectComments);

    const filterCommentsById = (name) => {
        const commentsList = Object.values(comments).filter(obj => obj.parent_id === name);
        return commentsList;
        
    };

    return (
        <Stack container="true" sx={{backgroundColor: '#0788bf', maxHeight: 500, overflow: 'auto'}}>
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
        </Stack>

    );
};

export default Comments;