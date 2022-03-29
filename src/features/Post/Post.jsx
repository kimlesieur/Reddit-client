import './Post.css';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../Comments/Comments';
import moment from 'moment';

const Post = ({post, index}) => {
    const [favorite, setFavorite] = useState(false);

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

    const numFavs =()=> {
        if(favorite){
            return post.ups + 1;
        }
        return post.ups;
    };

return (
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
    );
};

export default Post;