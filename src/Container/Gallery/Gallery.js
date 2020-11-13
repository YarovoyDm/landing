import React from 'react'
import cn from 'classnames'
import Gallery from '../../Component/Gallery/Gallery';
import style from './Gallery.module.scss'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';

class GalleryPage extends React.Component {
    render() {
        return (
            <>
                <div className={style.galleryPage}>
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
                        <div className={style.topBottom}/>
                    </div>
                    <div className={style.galleryBottom}>
                        <div className={style.botomHeader}>
                            <div className={style.headerItemActive}>Екстер'єр</div>
                            <div className={style.headerItem}>Інтер'єр</div>
                            <div className={style.headerItem}>Лобі</div>
                        </div>
                    </div>
                </div>
                <div className={style.galleryWrapper}>
                <div>
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
                </div>
                
            </>
        )
    }
}

export default GalleryPage