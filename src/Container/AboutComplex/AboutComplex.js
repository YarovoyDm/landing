import React from 'react'
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import Gallery from '../../Component/Gallery/Gallery';
import GalleryPopup from '../../Component/GalleryPopup/GalleryPopup';
import style from './AboutComplex.module.scss'

class AboutComplex extends React.Component {
    state={
        popupIsOpen: false,
        imageId: 0
    }

    popupOpen = (id) => {
        this.setState({
            popupIsOpen: true,
            imageId: id
        })
        document.body.style.overflow = 'hidden'
    }

    onPopupChange = () => {
        this.setState({
            popupIsOpen: !this.state.popupIsOpen
        })
        document.body.style.overflow = 'visible'
    }
    render() {
        return (
            <>
                <div className={style.aboutComplex}>
                {this.state.popupIsOpen && <GalleryPopup imageType={this.state.imageId} type='popup' handle={this.onPopupChange}/>}
                <Breadcrumbs current='ПРО КОМПЛЕКС' />
                    <div className={style.complexImage} />
                    <div className={style.complexHeader}>
                        <div className={style.complexTitle}>
                            ПРО КОМПЛЕКС
                        </div>
                        <div className={style.complexText}>
                            Стриманість та функціональність сучасної архітектури, інноваційні
                            інженерні рішення, безпрецедентні умови для комфорту мешканців
                            та найкраще розташування в центрі міста - всі ці переваги 
                            органічно поєднуються у житловому комплексі &#171;Krauss Gallery&#187;
                        </div>
                    </div>
                </div>
                <div className={style.firstBlock}>
                    <div className={style.firstImage}/>
                    <div className={style.firstWrapper}>
                        <div className={style.firstInfro}>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    Еліт
                                </div>
                                <div className={style.itemText}>
                                    Клас ЖК
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    3,3 м
                                </div>
                                <div className={style.itemText}>
                                    Висота стелі
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    10
                                </div>
                                <div className={style.itemText}>
                                    Поверхів
                                </div>
                            </div>
                        </div>
                        <div className={style.textWrapper}>
                            <div className={style.firstText}>
                                Термін введення в експлуатацію
                                <div className={style.highlightText}>4 кв. 2022 році</div>
                            </div>
                            <Link to='/infrastructure' className={style.firstButton}>Генплан території</Link>
                        </div>
                    </div>
                </div>
                <div className={style.secondBlock}>
                    <div className={style.secondLeft}>
                        <div className={style.leftTitle}>
                            Про забудовника
                        </div>
                        <div className={style.secondText}>
                            За 14 років успішної роботи на ринку нерухомості України
                            підприємство зарекомендовало себе надійним партнером, який завжди
                            виконує зобов'язання. Ми сфокусовані на будівництві
                            житлової та комерційної нерухомості, в портфелі Кретор-Буд
                            поняд 50 проектів.
                        </div>
                        <Link to='/about-developer' className={style.secondButton}>Детальніше</Link>
                    </div>
                    <div className={style.secondRightImage}>
                        <div className={style.imageLabel}>
                            <div className={style.logo}/>
                        </div>
                    </div>
                </div>
                <div className={style.thirdBlock}>
                    <div className={style.thirdTop}>
                        <div className={style.thirdImage}/>
                        <div className={style.thirdInfo}>
                            <div className={style.infoTitle}>
                                Спортзал
                            </div>
                            <div className={style.infoText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                    <div className={style.thirdMiddle}>
                        <div className={style.thirdInfo}>
                            <div className={style.infoTitle}>
                                Внутрішній двір
                            </div>
                            <div className={style.infoText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                        <div className={style.middleImage}/>
                    </div>
                    <div className={style.thirdBottom}>
                        <div className={style.botImage}/>
                        <div className={style.thirdInfo}>
                            <div className={style.infoTitle}>
                                Безпека
                            </div>
                            <div className={style.infoText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.fourthBlock}>
                    <div className={style.fourthText}>
                        Стриманість та функціональність сучасної архітектури, інноваційні
                        інженерні рішення, безпрецедентні умови для комфорту мешканців
                        та найкраще розташування в центрі міста - всі ці переваги 
                        органічно поєднуються у житловому комплексі &#171;Krauss Gallery&#187;
                    </div>
                    <Link to='/infrastructure' className={style.fourthButton}>
                        Інфраструктура
                    </Link>
                </div>
                <div className={style.fifthBlock}>
                    <div className={style.fifthInfo}>
                        <div className={style.fifthTitle}>Технології будівництва</div>
                        <div className={style.fifthText}>
                            За 14 років успішної роботи на ринку нерухомості України
                            підприємство зарекомендовало себе надійним партнером, який завжди
                            виконує зобов'язання. Ми сфокусовані на будівництві
                            житлової та комерційної нерухомості, в портфелі Кретор-Буд
                            поняд 50 проектів.
                        </div>
                        <Link to='construction-technology' className={style.fifthButton}>Детальніше</Link>
                    </div>
                    <div className={style.fifthImage}/>
                </div>
                <div className='landing_gallery'>
                    <div className='landing_gallery-header'>
                        <div className='landing_gallery-title'>Галерея</div>
                        <Link to='/gallery' className='landing_gallery-wrapper'>
                            <div className='landing_gallery-all'>
                                <div className={style.PcText}>Дивитись усі</div>
                                <div className={style.mobileText}>Усі</div> рендери
                            </div>
                            <div className='landing_gallery-arrowIcon' />
                        </Link>
                    </div>
                    <div>
                        <div className='landing-gallery-imagesWrapper'>
                            <div className='landing-gallery-nav'>
                                <div className='gallery_nav-arrow' />
                                <div className='gallery_nav-arrowRotate' />
                            </div>
                            </div>
                        <Gallery callback={this.popupOpen}/>
                        <div>
                            <div className='landing-gallery-progressLine'>
                                <div className='landing-gallery-currentProgress' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.sixthBlock}/>
            </>
        )
    }
}

export default AboutComplex