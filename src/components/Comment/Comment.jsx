import React from 'react';
import './Comment.css';
import { Typography, Card, Grid } from '@mui/material';




const Comment = ({comments}) => {

  if(comments.removal_reason){
    return null;
  }

  return (
    <Grid item sx={{m: 2, backgroundColor: '#0788bf'}}>
      <Card sx={{backgroundColor: '#0788bf'}}>
      <Typography color="white">{comments.author} : {comments.body}</Typography> 
      </Card>
      
    </Grid>
  );
};

export default Comment;
