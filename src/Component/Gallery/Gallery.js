import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames'
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

    componentDidMount(){
        
    }

    render() {
        const isMobile = window.screen.width >= 320 && window.screen.width <= 425
        let getSlides = 0
        if(window.screen.width === 320){
            getSlides = 1.65
        }
        if(window.screen.width === 375){
            getSlides = 1.9
        }
        if(window.screen.width === 425){
            getSlides = 2.2
        }
        console.log({getSlides})
        return (
            <div className={cn('gallery', {galleryPopup: this.props.type === 'popup'})}>
                <Swiper
                    spaceBetween={isMobile ? 10 : 50}
                    slidesPerView={isMobile ? getSlides : 1.4}
                    navigation={true}
                    zoom
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide onClick={() => this.props.callback(1)}><img src={gallery1} /></SwiperSlide>
                    <SwiperSlide onClick={() => this.props.callback(2)}><img src={gallery2} /></SwiperSlide>
                    <SwiperSlide onClick={() => this.props.callback(3)}><img src={gallery3}/></SwiperSlide>
                    <SwiperSlide onClick={() => this.props.callback(4)}><img src={gallery4}/></SwiperSlide>
                    <SwiperSlide onClick={() => this.props.callback(5)}><img src={gallery5}/></SwiperSlide>
                </Swiper>
                
            </div>
        )
    }
}

export default Gallery