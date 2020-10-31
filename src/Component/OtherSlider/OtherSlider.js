import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import './OtherSlider.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class OtherSlider extends React.Component {


    render() {
        return (<div className='otherSlider'>
            <Swiper
                spaceBetween={150}
                slidesPerView={2}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><a href='https://creatorcity.com.ua/' className='landing-other-projectBlock'>
                    <div className='landing-other-imageFirst' />
                    <div className='landing-other-imageText'>ЖК Creator City</div>
                </a></SwiperSlide>
                <SwiperSlide><a href='http://nauki58.com.ua/' className='landing-other-projectBlock'>
                    <div className='landing-other-imageSecond' />
                    <div className='landing-other-imageText'>ЖК Науки 58</div>
                </a></SwiperSlide>
                <SwiperSlide><a href='https://creatorcity.com.ua/' className='landing-other-projectBlock'>
                    <div className='landing-other-imageFirst' />
                    <div className='landing-other-imageText'>ЖК Creator City</div>
                </a></SwiperSlide>
                <SwiperSlide><a href='http://nauki58.com.ua/' className='landing-other-projectBlock'>
                    <div className='landing-other-imageSecond' />
                    <div className='landing-other-imageText'>ЖК Науки 58</div>
                </a></SwiperSlide>
                <SwiperSlide><a href='https://creatorcity.com.ua/' className='landing-other-projectBlock'>
                    <div className='landing-other-imageFirst' />
                    <div className='landing-other-imageText'>ЖК Creator City</div>
                </a></SwiperSlide>
                
            </Swiper>

        </div>
        )
    }
}

export default OtherSlider