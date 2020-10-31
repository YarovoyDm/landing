import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import './Gallery.css'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import gallery1 from '../../Images/gallery1.jpg'
import gallery2 from '../../Images/gallery2.jpg'
import gallery3 from '../../Images/gallery3.jpg'
import gallery4 from '../../Images/gallery4.jpg'
import gallery5 from '../../Images/gallery5.jpg'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Gallery extends React.Component {


    render() {
        const isMobile = window.screen.width >= 360 && window.screen.width <= 425
        return (
            <div className='gallery'>
                <Swiper
                    spaceBetween={isMobile ? 100 : 50}
                    slidesPerView={2}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={gallery1}width="700"  height="500"></img></SwiperSlide>
                    <SwiperSlide><img src={gallery2}width="450"  height="500"/></SwiperSlide>
                    <SwiperSlide><img src={gallery3}width="450"  height="500" /></SwiperSlide>
                    <SwiperSlide><img src={gallery4}width="650"  height="500" /></SwiperSlide>
                    <SwiperSlide><img src={gallery5}width="550"  height="500" /></SwiperSlide>
                </Swiper>
                
            </div>
        )
    }
}

export default Gallery