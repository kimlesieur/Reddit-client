import './Subreddits.css';
import Subreddit from '../Subreddit/Subreddit';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {selectSubredddits, isLoading, isError, loadSubreddits} from './subredditsSlice';



const Subreddits = () => {
    const dispatch= useDispatch();
    const subreddits = useSelector(selectSubredddits);
    const loading = useSelector(isLoading);
    const error = useSelector(isError);

    useEffect(() => {
        dispatch(loadSubreddits())},
        [dispatch]
    );

    if (loading) {
        return <div>loading state</div>;
      }


    return (
        <Swiper 
            slidesPerView={4}
            spaceBetween={10}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper"
        >
            
            {subreddits.map((subreddit, index) => {
                  return <SwiperSlide key={subreddit.id}>
                            <Subreddit subreddit={subreddit} /> 
                        </SwiperSlide>
                    }
                )}
        </Swiper>
    );
};

export default Subreddits;