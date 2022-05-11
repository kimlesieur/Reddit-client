import './Post.css';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../../features/Comments/Comments';
import moment from 'moment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import pink from '@mui/material/colors/pink';
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({post, index}) => {
    const [favorite, setFavorite] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const checkIfPicture = (is_gallery, is_media) => {
        if(post.is_gallery || post.media){
            return false;
        }
        return true;
    };

    const favoritePost = () => {
        if(favorite === false){
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    };

    const numFavs = () => {
        if(favorite){
            return post.ups + 1;
        }
        return post.ups;
    };

    const toggleComments = () => {
       return showComments ? setShowComments(false) : setShowComments(true);
    }

return (
    <Grid item key={post.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                {checkIfPicture(post.is_gallery, post.media) && 
                <CardMedia
                component="img"
                sx={{
                    pt: '10%',
                    px: '10%',
                }}
                image={post.url}
                alt="random"
                />
                }
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                    {post.title}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                    Posted by : {post.author}
                    </Typography>
                    <Typography>
                    {moment.unix(post.created_utc).fromNow()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large"  onClick={() => toggleComments()}>
                        <CommentIcon/>
                        <Comments numComments={post.num_comments} postId={post.id} postName={post.name} permalink={post.permalink} showingComments={post.showingComments} index={index} />
                    </Button>
                    <Button size="large"  onClick={() => favoritePost()}>
                    {favorite ?
                        <FavoriteIcon sx={{ color: pink[500]  }} />
                        :
                        <FavoriteBorderIcon sx={{ color: pink[500] }} />
                    }
                        {numFavs()}
                    </Button>
                </CardActions>
                
            <div className="comments-container">
                <div className="post-comments">
                    
                </div>
            </div>
        </Card>
    </Grid>
    );
};

export default Post;


/*

<article key={post.id}>
            <div className="post-container">
                <h3 className="post-title">{post.title}</h3>
            
                {checkIfPicture(post.is_gallery, post.media) && 
                    <div className="post-image-container">
                        <img src={post.url} alt="" className="post-image" />
                    </div>
                }

                <div className="favorites-container">
                    <button className="favorites-icon-button" type="button"
                     onClick={() => favoritePost()}
                        >
                        <span className={`favorites-icon ${favorite && 'active'}`}>favorite</span>
                    </button>
                    <span className="favorites-count">{numFavs()}</span>
                </div>
                
                <div className="post-details">
                    <span className="author-username"><b>Posted by :</b><br/>{post.author}</span>
                    <span className="post-time">{moment.unix(post.created_utc).fromNow()}</span>
                </div>

            </div>
            <div className="comments-container">
                <div className="post-comments">
                    <Comments numComments={post.num_comments} postId={post.id} postName={post.name} permalink={post.permalink} showingComments={post.showingComments} index={index} />
                </div>
            </div>

    </article>

*/