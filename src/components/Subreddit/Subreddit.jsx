import './Subreddit.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubreddit, selectSubreddit } from '../../features/Posts/postsSlice';


const Subreddit = ({subreddit}) => {
    const dispatch= useDispatch();
    const actualSubreddit = useSelector(selectSubreddit);

return (
        <div className={`subreddit-container
                    ${actualSubreddit === subreddit.display_name_prefixed && `selected-subreddit`}
                    `}

                    onClick={() => dispatch(setSubreddit(subreddit.display_name_prefixed), [actualSubreddit])}
            >
             <div className="subreddit-card">
                    <img
                        src={subreddit.icon_img || './postAvatar.jpg' }
                        alt={subreddit.display_name}
                        className="subreddit-img"
                        style={{border: `3px solid ${subreddit.primary_color}`}}
                    
                    />
                    <div className="subreddit-name">
                        {subreddit.display_name} 
                    </div>
            </div>
        </div>
       
   
    );
};

export default Subreddit;