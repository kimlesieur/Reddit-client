import React from 'react';
import './Comment.css';
import { Typography, Card } from '@mui/material';

const Comment = ({comments}) => {

  if(comments.removal_reason){
    return null;
  }

  return (
      <Card sx={{backgroundColor: '#0777ab', m:2}}>
        <Typography color="white" sx={{textDecoration: 'underline', p: 1}}>{comments.author} :</Typography> 
        <Typography color="white" sx={{p: 1}}>{comments.body}</Typography> 
      </Card>
  );
};

export default Comment;
