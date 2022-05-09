import React from 'react';
import './Comment.css';

const Comment = ({comments}) => {

  if(comments.removal_reason){
    return null;
  }

  return (
    <div className="comment">
     {comments.author} : {comments.body}
     <br/>


    </div>
  );
};

export default Comment;
