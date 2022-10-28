import './Subreddit.css';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setSubreddit, selectSubreddit } from '../../features/Posts/postsSlice';


const Subreddit = ({subreddit}: {subreddit: Subreddit}) => {
    const dispatch= useAppDispatch();
    const actualSubreddit = useAppSelector(selectSubreddit);

return (
        <div className={`subreddit-container
                    ${actualSubreddit === subreddit.display_name_prefixed && `selected-subreddit`}
                    `}

                    onClick={() => dispatch(setSubreddit(subreddit.display_name_prefixed))}
            >
             <div className="subreddit-card">
                    <img
                        src={subreddit.icon_img || './postAvatar.jpg' }
                        alt={subreddit.display_name}
                        className="subreddit-img"
                    
                    />
                    <div className={`subreddit-name
                    ${actualSubreddit === subreddit.display_name_prefixed && `selected-subreddit`}
                    `}>
                        {subreddit.display_name} 
                    </div>
            </div>
        </div>
       
   
    );
};

export default Subreddit;