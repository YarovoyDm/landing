import React from 'react'
import { Link } from 'react-router-dom';
import Gallery from '../../Component/Gallery/Gallery';
import GalleryPopup from '../../Component/GalleryPopup/GalleryPopup';
import OtherSlider from '../../Component/OtherSlider/OtherSlider';
import Slider from '../../Component/Slider/Slider';
import Subscribe from '../../Component/Subscribe/Subscribe';
import { ReactComponent as Arrow } from '../../Images/downArrowLanding.svg';
import style from './NewLanding.module.scss'

class NewLanding extends React.Component {

    state = {
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
            <div className={style.landing}>

                {this.state.popupIsOpen && <GalleryPopup imageType={this.state.imageId} type='popup' handle={this.onPopupChange} />}
                <div className='landing_intro'>
                    <div className='landing_intro-top'>
                        <div className='socialIcons_wrapper'>
                            <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className='social-facebook' />
                            <a target='_blank' href='https://www.instagram.com/krauss.gallery' className='social-instagram' />
                            <a target='_blank' href='https://t.me/kreator_bud' className='social-telegram' />
                        </div>
                        <div className='landing_intro-topLeft'>
                            <div className='landing_intro-title'>
                                МИСТЕЦТВО<br />
                                БУТИ<br />
                                ОСОБИСТІСТЮ
                            </div>
                            <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
                            <div className='landing-intro-goDownButton'>
                                <Arrow />
                            </div>
                            <div className='landing-intro-houseType'>
                                <div className='landing_intro-houseTypeItem'>
                                    <div className='landing_intro-houseTypeTop'>
                                        <div className='houseTypeTop-size'>1K</div>
                                        <div className='houseTypeTop-text'>квартири</div>
                                    </div>
                                    <div className='landing_intro-houseTypeBot'>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Площа
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 50.95 м&#178;
                                            </div>
                                        </div>
                                        <div className='price'>
                                            <div className='houseTypeBot-title'>
                                                Ціна за м&#178;
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 38 100 грн
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='landing_intro-houseTypeItem'>
                                    <div className='landing_intro-houseTypeTop'>
                                        <div className='houseTypeTop-size'>2K</div>
                                        <div className='houseTypeTop-text'>квартири</div>
                                    </div>
                                    <div className='landing_intro-houseTypeBot'>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Площа
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 56.85 м&#178;
                                            </div>
                                        </div>
                                        <div className='price'>
                                            <div className='houseTypeBot-title'>
                                                Ціна за м&#178;
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 36 400 грн
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='landing_intro-houseTypeItem'>
                                    <div className='landing_intro-houseTypeTop'>
                                        <div className='houseTypeTop-size'>3K+</div>
                                        <div className='houseTypeTop-text'>квартири</div>
                                    </div>
                                    <div className='landing_intro-houseTypeBot'>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Площа
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 260.84 м&#178;
                                            </div>
                                        </div>
                                        <div className='price'>
                                            <div className='houseTypeBot-title'>
                                                Ціна за м&#178;
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 38 200 грн
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='landing-intro-topImage' />
                        <div className='secondBlock-absolute'>
                            <div className='landing_intro-title'>
                                МИСТЕЦТВО<br />
                                БУТИ<br />
                                ОСОБИСТІСТЮ
                            </div>
                            <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
                        </div>
                        <div className={style.goDownButton}>
                            <Arrow />
                        </div>
                    </div>
                    <div className='landing_intro-bottom'>
                        <div className={style.help}>
                            <div className='landing_house-line' />
                            <div className='landing_house-titleText'>
                                ПРО ЗАБУДОВНИКА
                            </div>
                            <div className='landing_house-line' />
                        </div>
                        <div className='landing_intro-botImage' />
                        <div className='landing_intro-right'>
                            <div className='landing_intro-BotTitle'>
                                <div className='landing_house-line' />
                                <div className='landing_house-titleText'>
                                    ПРО ЗАБУДОВНИКА
                                </div>
                            </div>
                            <div className='landing_intro-subtitle'>
                                Вигідні пропозиції<br />
                                від забудовника
                            </div>
                            <div className='landing_intro-text'>
                                &#171;Krauss Gallery&#187; - це вишукана нерухомість класу еліт
                                в самому центрі Києва.<br /><br />
                                Розташований на вулиці Круглоуніверситетська, 5-7, він
                                завжди знаходиться у вирі ділового та культурного життя Печерського
                                району.<br /><br />
                                Проект девелоперської компанії Креатор Буд представляє собою
                                десятиповерховий будинок з квартирами та апартаментами,
                                звідки відкривається дивовижний краєвид на історичний центр міста.
                                Бессарабський ринок і вулиця Хрещатик, PinchukArtCenter та Арена Сіті,
                                парки і сквери, елітні ліцеї, гімназії та школи, ключові торговельні
                                центри і магазини, клініка та фітнес-клуби - у &#171;Krauss Gallery&#187;
                                все необхідне на відстані кількох кроків.
                            </div>
                            <Link to='/about-developer' className='landing-itro-button'>Детальніше</Link>
                        </div>
                    </div>
                </div>
                <div className={style.landing_secondBlock}>
                    <div className={style.secondTop}>

                        <div className={style.topLeft}>
                            <div className={style.infoWrapper}>
                                <div className={style.blockName}>
                                    <div className={style.nameLine} />
                                    <div className={style.nameText}>БУДИНОК</div>
                                </div>
                                <div className={style.blockTitle}>
                                    Продумані планування
                                </div>
                                <div className={style.blockText}>
                                    Жити з комфортом у центрі улюбленого міста
                                    Отримувати максимум задоволення від життя в
                                    квартирах зі зручними плануваннями, високими
                                    стелями та панорамними вікнами.
                                </div>
                                <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
                            </div>
                        </div>
                        <div className='landing-house-wrapper'>
                            <div className='landing-house-buttonWrapper'>
                                <div className='landing-house-ArrowButton'>
                                    &#8594;
                                </div>
                                <div className='landing-house-ArrowButton'>
                                    &#8592;
                                </div>
                            </div>
                            <Slider />
                        </div>
                        <div className={style.help}>
                            <div className='landing_house-line' />
                            <div className='landing_house-titleText'>
                                БУДИНОК
                            </div>
                            <div className='landing_house-line' />
                        </div>
                    </div>
                    <div className={style.secondBottom}>
                        <div className={style.help}>
                            <div className='landing_house-line' />
                            <div className='landing_house-titleText'>
                                ПРО КОМПЛЕКС
                            </div>
                            <div className='landing_house-line' />
                        </div>
                        <div className={style.secondBottomImage} />
                        <div className={style.infoWrapper}>
                            <div className={style.blockName}>
                                <div className={style.nameLine} />
                                <div className={style.nameText}>ПРО КОМПЛЕКС</div>
                            </div>
                            <div className={style.blockTitle}>
                                Архітектура та якість
                                будівництва
                            </div>
                            <div className={style.blockText}>
                                Ми будуємо житловий комплекс &#171;Krauss Gallery&#187;
                                за сучасними технологіями будівництва з
                                використанням матеріалів високої якості
                            </div>
                            <Link to='/about-the-complex' className='landing-house-botButton'>Більше інформації</Link>
                        </div>
                    </div>
                    <div className={style.thirdBlock}>
                        <div className={style.infoWrapper}>
                            <div className={style.blockName}>
                                <div className={style.nameLine} />
                                <div className={style.nameText}>ХІД БУДІВНИЦТВА</div>
                            </div>
                            <div className={style.blockTitle}>
                                Статус будівництва
                                ЖК Krauss Gallery
                            </div>
                            <Link to='/construction-progress' className='landing_constractionStatus-button'>Детальніше</Link>
                        </div>
                        <div className={style.thirdImage} />
                        <div className={style.help}>
                            <div className='landing_house-line' />
                            <div className='landing_house-titleText'>
                                ХІД БУДІВНИЦТВА
                            </div>
                            <div className='landing_house-line' />
                        </div>
                    </div>
                    <div className={style.fourthBlock}>
                        <div className={style.fourthTop}>
                            <div className={style.help}>
                                <div className='landing_house-line' />
                                <div className='landing_house-titleText'>
                                    ІНФРАСТРУКТУРА ПОРЯД
                                </div>
                                <div className='landing_house-line' />
                            </div>
                            <div className={style.fourthImage} />
                            <div className={style.infoWrapper}>
                                <div className={style.blockName}>
                                    <div className={style.nameLine} />
                                    <div className={style.nameText}>ІНФРАСТРУКТУРА ПОРЯД</div>
                                </div>
                                <div className={style.blockTitle}>
                                    Все необхідне поруч
                                </div>
                                <div className={style.blockText}>
                                    Все, що потрібно для вашої зручності знаходиться
                                    всередині будинку абов кількох хвилинах пішки.
                                    Від великих торгово-розважальних центрів
                                    до невеликих затишних кав'ярень
                                </div>
                                <Link to='/infrastructure' className='landing-infrastructure-button'>Більше інформації</Link>
                            </div>
                        </div>
                        <div className='landing_gallery'>
                            <div className='landing_gallery-header'>
                                <div className='landing_gallery-title'>Галерея</div>
                                <Link to='/gallery' className='landing_gallery-wrapper'>
                                    <div className='landing_gallery-all'>Дивитись усі рендери</div>
                                    <div className='landing_gallery-arrowIcon' />
                                </Link>
                            </div>
                            <div >
                                <div className='landing-gallery-imagesWrapper'>
                                    <div className='landing-gallery-nav'>
                                        <div className='gallery_nav-arrow' />
                                        <div className='gallery_nav-arrowRotate' />
                                    </div>
                                </div>
                                <div><Gallery callback={this.popupOpen} /></div>
                                <div>
                                    <div className='landing-gallery-progressLine'>
                                        <div className='landing-gallery-currentProgress' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                    <div className='landing_other'>
                        <div className='landing-other-left'>
                            <div className={style.help}>
                                <div className='landing_house-line' />
                                <div className='landing_house-titleText'>
                                    ПРОЕКТИ
                                </div>
                                <div className='landing_house-line' />
                            </div>
                            <div className='landing_other-title'>
                                <div className='landing_other-line' />
                                <div className='landing_other-titleText'>
                                    ПРОЕКТИ
                                </div>
                            </div>
                            <div className='landing_other-subtitle'>
                                Інші проекти<br />
                            від забудовника<br />
                            &#171;Креатор-Буд&#187;
                        </div>
                            <div className='landing_other-logo' />
                        </div>
                        <div className='landing-other-right'>
                            <OtherSlider />
                            <div className={style.otherWrapper}>
                                <a href='http://nauki58.com.ua/' className='landing-other-projectBlock'>
                                    <div className='landing-other-imageSecond' />
                                    <div className='landing-other-imageText'>ЖК Науки 58</div>
                                </a>
                                <a href='https://creatorcity.com.ua/' className='landing-other-projectBlock'>
                                    <div className='landing-other-imageFirst' />
                                    <div className='landing-other-imageText'>ЖК Creator City</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewLanding