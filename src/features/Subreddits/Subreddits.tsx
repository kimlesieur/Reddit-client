import './Subreddits.css';
import Subreddit from '../../components/Subreddit/Subreddit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import React, {useEffect} from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {selectSubredddits, isLoading, loadSubreddits} from './subredditsSlice';
import Container from '@mui/material/Container';



const Subreddits = () => {
    const dispatch= useAppDispatch();
    const subreddits = useAppSelector(selectSubredddits);
    const loading = useAppSelector(isLoading);

    useEffect(() => {
        dispatch(loadSubreddits())},
        [dispatch]
    );

    if (loading) {
        return <div>loading state</div>;
      }


    return (
        <Container sx={{ py: 7, mx: 'auto' }} maxWidth="md">
            <Swiper 
                slidesPerView={3}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                {subreddits.map((subreddit: Subreddit, index: number) => {
                    return <SwiperSlide key={index}>
                                <Subreddit subreddit={subreddit} /> 
                            </SwiperSlide>
                        }
                    )}
            </Swiper>
        </Container>
    );
};

export default Subreddits;