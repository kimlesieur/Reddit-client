import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Comment from '../../components/Comment/Comment';
import { selectComments } from './commentsSlice';

import {Stack, Container} from '@mui/material';


const Comments = ({postName, showingComments}: {postName: string, showingComments: any}) => {

    const comments: Comment[] = useAppSelector(selectComments);

    const filterCommentsById = (name: string) => {
        const commentsList = Object.values(comments).filter((obj: any) => obj.parent_id === name);
        return commentsList;
        
    };

    return (
        <Stack>
            <Container maxWidth="md">
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
            </Container>
        </Stack>

    );
};

export default Comments;