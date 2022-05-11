import './Subreddits.css';
import Subreddit from '../../components/Subreddit/Subreddit';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {selectSubredddits, isLoading, isError, loadSubreddits} from './subredditsSlice';
import Container from '@mui/material/Container';



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
        <Container sx={{ py: 2, mx: 'auto' }} maxWidth="md">
            <Swiper 
                slidesPerView={4}
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
        </Container>
    );
};

export default Subreddits;