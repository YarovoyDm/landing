import React from 'react'
import cn from 'classnames'
import ReactPlayer from 'react-player'
import Gallery from '../../Component/Gallery/Gallery';
import style from './Gallery.module.scss'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import GalleryPopup from '../../Component/GalleryPopup/GalleryPopup';

class GalleryPage extends React.Component {
    state={
        tabValue: 0
    }

    handleChange = (index) => {
        this.setState({ tabValue: index })
    }

    rednerTabInfo = () => {
        if (this.state.tabValue === 0) {
            return <div className={style.backDiv}>
                <div className='landing-gallery-imagesWrapper'>
                    <div className='landing-gallery-nav'>
                        <div className='gallery_nav-arrow' />
                        <div className='gallery_nav-arrowRotate' />
                    </div>
                </div>
                <Gallery />
                <div>
                    <div className='landing-gallery-progressLine'>
                        <div className='landing-gallery-currentProgress' />
                    </div>
                </div>
            </div>
        }
        if (this.state.tabValue === 1) {
            return <div className={style.inImage} />
        }
        if (this.state.tabValue === 2) {
            return <div className={style.inImage} />
        }
    }

    render() {
        return (
            <>
                <div className={style.galleryPage}>
                    {/* <GalleryPopup /> */}
                    <Breadcrumbs current='ГАЛЕРЕЯ'/>
                    <div className={style.galleryTop}>
                        <div className={style.topLeft}>
                            <div className={style.leftTitle}>
                                ПРО ЗАБУДОВНИКА
                            </div>
                            <div className={style.leftText}>
                                За 14 років успішної роботи на ринку нерухомості України
                                підприємство зарекомендовало себе надійним партнером, який завжди
                                виконує зобов'язання. Ми сфокусовані на будівництві
                                житлової та комерційної нерухомості, в портфелі Кретор-Буд
                                поняд 50 проектів.
                            </div>
                        </div>
                        <div className={style.topBottom}>
                            <ReactPlayer className={style.player} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                        </div>
                    </div>
                    <div className={style.galleryBottom}>
                        <div className={style.botomHeader}>
                            <div className={cn(style.headerItemActive, { [style.activeButton]: this.state.tabValue === 0 })} onClick={() => this.handleChange(0)}>Екстер'єр</div>
                            <div className={cn(style.headerItem, {[style.activeButton]: this.state.tabValue === 1})} onClick={() => this.handleChange(1)}>Інтер'єр</div>
                            <div className={cn(style.headerItem, {[style.activeButton]: this.state.tabValue === 2})} onClick={() => this.handleChange(2)}>Лобі</div>
                        </div>
                    </div>
                </div>
                <div className={style.galleryWrapper}>
                    {this.rednerTabInfo()}
                </div>
                
            </>
        )
    }
}

export default GalleryPage