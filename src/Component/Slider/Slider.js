import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import './Slider.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Slider extends React.Component {


    render() {
        return (<div className='slider'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={true}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className='landing-house-topImage' /></SwiperSlide>
                    <SwiperSlide><div className='landing-house-topImage' /></SwiperSlide>
                    <SwiperSlide><div className='landing-house-topImage' /></SwiperSlide>
                </Swiper>
                
            </div>
        )
    }
}

export default Slider