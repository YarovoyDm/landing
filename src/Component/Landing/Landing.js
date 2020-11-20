import React from 'react'
import Subscribe from '../Subscribe/Subscribe';
import { Link } from 'react-router-dom';

import './Landing.css'

import { ReactComponent as Arrow } from '../../Images/downArrowLanding.svg';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import OtherSlider from '../OtherSlider/OtherSlider';
import GalleryPopup from '../GalleryPopup/GalleryPopup';


class Landing extends React.Component {
    state={
        popupIsOpen: false
    }

    onPopupChange = () => {
        this.setState({
            popupIsOpen: !this.state.popupIsOpen
        })
        
    }
    render() {
        
        return (
            <><div className='landing'>
                {this.state.popupIsOpen && <GalleryPopup type='popup' handle={this.onPopupChange}/>}
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
                                {/* <div className='landing_intro-houseTypeItem'>
                                    <div className='landing_intro-houseTypeTop'>
                                        <div className='houseTypeTop-size'>2х рівневі</div>
                                        <div className='houseTypeTop-text'>квартири</div>
                                    </div>
                                    <div className='landing_intro-houseTypeBot'>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Площа
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 95.2 м&#178;
                                            </div>
                                        </div>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Ціна за м&#178;
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 40 500 грн
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='landing-intro-topImage' />
                    </div>
                    <div className='landing_intro-bottom'>
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
                <div className='landing_house'>
                    <div className='landing_house-top'>
                        <div className='landing_house-topLeft'>
                            <div className='landing_house-title'>
                                <div className='landing_house-line' />
                                <div className='landing_house-titleText'>
                                    БУДИНОК
                                </div>
                            </div>
                            <div className='landing_house-subtitle'>
                                Продумані планування
                            </div>
                            <div className='landing_house-text'>
                                Жити з комфортом у центрі улюбленого міста<br />
                                Отримувати максимум задоволення від життя в<br />
                                квартирах зі зручними плануваннями, високими<br />
                                стелями та панорамними вікнами.<br />
                            </div>
                            <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
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
                    </div>
                    <div className='landing_house-bottom'>
                        <div className='landing-house-botImage' />
                        <div className='landing_house-topRight'>
                            <div className='landing_house-botTitle'>
                                <div className='landing_house-botLine' />
                                <div className='landing_house-botTitleText'>
                                    ПРО КОМПЛЕКС
                                </div>
                            </div>
                            <div className='landing_house-botSubtitle'>
                                Архітектура та якість<br />
                                будівництва
                            </div>
                            <div className='landing_house-text'>
                            Ми будуємо житловий комплекс <br />&#171;Krauss Gallery&#187;
                                    за сучасними технологіями<br /> будівництва з
                                    використанням матеріалів<br /> високої якості<br />
                            </div>
                            <Link to='/about-the-complex' className='landing-house-botButton'>Більше інформації</Link>
                        </div>
                    </div>
                </div>
                <div className='landing_constractionStatus'>
                    <div>
                        <div className='landing_landing_constractionStatus-title'>
                            <div className='landing_constractionStatus-line' />
                            <div className='landing_constractionStatus-titleText'>
                                ХІД БУДІВНИЦТВА
                            </div>
                        </div>
                        <div className='landing_constractionStatus-text'>
                            Статус Будівництва <br />
                            ЖК Krauss Gallery
                        </div>
                        <Link to='/construction-progress' className='landing_constractionStatus-button'>
                            Детальніше
                        </Link>
                    </div>
                    <div className='landing_constractionStatus-image' />
                </div>
                <div className='landing_infrastructure'>
                    <div className='landing_infrastructure-image' />
                    <div className='landing_infrastructure-right'>
                        <div className='landing_infrastructure-title'>
                            <div className='landing_infrastructure-line' />
                            <div className='landing_infrastructure-titleText'>
                                ІНФРАСТРУКТУРА ПОРЯД
                            </div>
                        </div>
                        <div className='landing_infrastructure-subtitle'>
                            Все необхідне поруч
                        </div>
                        <div className='landing_infrastructure-text'>
                            Все, що потрібно для вашої зручності<br /> знаходиться
                            всередині будинку або<br /> в кількох хвилинах пішки.
                            <br />Від великих торгово-розважальних<br /> центрів
                            до невеликих затишних кав'ярень<br />
                        </div>
                        <Link to='/infrastructure' className='landing-infrastructure-button'>
                            Більше інформації
                        </Link>
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
                    <div onClick={() => {
                this.setState({
                    popupIsOpen: true
                })
            }}>
                        {/* <div className='landing-gallery-imagesWrapper'>
                            <div className='landing-gallery-nav'>
                                <div className='gallery_nav-arrow' />
                                <div className='gallery_nav-arrowRotate' />
                            </div>
                            <div className='landing-gallery-imageFirst' />
                            <div className='landing-gallery-imageSecond' />
                            <div className='landing-gallery-imageThird' />
                        </div> */}
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
                {/* <div className='landing_news'>
                    <div className='landing_news-header'>
                        <div className='landing_news-title'>Новини</div>
                        <div className='landing_news-wrapper'>
                            <div className='landing_news-all'>Усі новини</div>
                            <div className='landing_news-arrowIcon' />
                        </div>
                    </div>
                    <div className='landing_news-itemWrapper'>
                        <div className='landing_news-item'>
                            <div className='landing_news-firstImage' />
                            <div className='landing_news-date'>20/08/2020</div>
                            <div className='landing_news-text'>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className='landing_news-arrowIcon' />
                        </div>
                        <div className='landing_news-item'>
                            <div className='landing_news-secondImage' />
                            <div className='landing_news-date'>20/08/2020</div>
                            <div className='landing_news-text'>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className='landing_news-arrowIcon' />
                        </div>
                        <div className='landing_news-item'>
                            <div className='landing_news-thirdImage' />
                            <div className='landing_news-date'>20/08/2020</div>
                            <div className='landing_news-text'>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className='landing_news-arrowIcon' />
                        </div>
                    </div>
                </div> */}
                <Subscribe />
                <div className='landing_other'>
                    <div className='landing-other-left'>
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
                    </div>
                </div>
            </div>
                <div className='landingMobile'>
                    {this.state.popupIsOpen && <GalleryPopup type='popup' handle={this.onPopupChange}/>}
                    <div>
                        <div className='landingMobile-itroImage' />
                    </div>
                    <div className='landingMobile-secondBlock'>
                        <div className='landing-intro-goDownButton'>
                            <Arrow />
                        </div>
                        <div className='secondBlock-absolute'>
                            <div className='landing_intro-title'>
                                МИСТЕЦТВО<br />
                                БУТИ<br />
                                ОСОБИСТІСТЮ
                            </div>
                            <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
                        </div>
                        <div className="secondBlock-data">
                            
                            <div className='landing_intro-right'>
                                <div className='landing_intro-BotTitle'>
                                    <div className='landing_house-line' />
                                    <div className='landing_house-titleText'>
                                        ПРО ЗАБУДОВНИКА
                                    </div>
                                    <div className='landing_house-line' />
                                </div>
                                <div className='landing_intro-botImage' />
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
                                    все необхідне на відстані кількох кроків. <br />
                                </div>
                                <Link to='news' className='landing-itro-button'>Детальніше</Link>
                            </div>
                        </div>
                    </div>
                    <div className='thirdBlock'>
                        <div className='landing_house-top'>
                            <div className='landing_house-topLeft'>
                                <div className='landing_house-title'>
                                    <div className='landing_house-line' />
                                    <div className='landing_house-titleText'>
                                        БУДИНОК
                                </div>
                                <div className='landing_house-line' />
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
                                <div className='landing_house-subtitle'>
                                    Продумані планування
                            </div>
                                <div className='landing_house-text'>
                                    Жити з комфортом у центрі улюбленого міста<br />
                                    Отримувати максимум задоволення від життя в<br />
                                    квартирах зі зручними плануваннями, високими<br />
                                    стелями та панорамними вікнами.<br />
                            </div>
                            <Link to='/house' className='landing-house-button'>Обрати квартиру</Link>
                            </div>
                            
                        </div>
                        <div className='landing_house-bottom'>
                            <div className='landing_house-botTitle'>
                                <div className='landing_house-botLine' />
                                <div className='landing_house-botTitleText'>
                                    ПРО КОМПЛЕКС
                                </div>
                                <div className='landing_house-botLine' />
                            </div>
                            <div className='landing_house-topRight'>

                                <div className='landing-house-botImage' />
                                <div className='landing_house-botSubtitle'>
                                    Архітектура та якість<br />
                                будівництва
                            </div>
                                <div className='landing_house-text'>
                                    Ми будуємо житловий комплекс &#171;Krauss Gallery&#187;<br />
                                    за сучасними технологіями будівництва з<br />
                                    використанням матеріалів високої якості<br />
                                </div>
                                <Link to='/about-the-complex' className='landing-house-botButton'>Більше інформації</Link>
                            </div>
                        </div>
                    </div>
                    <div className='fourthBlock'>
                        <div className='landing_constractionStatus'>
                            <div className='landing_landing_constractionStatus-title'>
                                <div className='landing_constractionStatus-line' />
                                <div className='landing_constractionStatus-titleText'>
                                    ХІД БУДІВНИЦТВА
                                </div>
                                <div className='landing_constractionStatus-line' />
                            </div>
                            <div className='landing_constractionStatus-image' />
                            <div className='landing_constractionStatus-text'>
                                Статус Будівництва <br />
                                    ЖК Krauss Gallery
                            </div>
                            <Link to='/construction-progress' className='landing_constractionStatus-button'>
                            Детальніше
                        </Link>
                        </div>
                    </div>
                    <div className='fifthBlock'>
                        <div className='landing_infrastructure'>
                            <div className='landing_infrastructure-right'>
                                <div className='landing_infrastructure-title'>
                                    <div className='landing_infrastructure-line' />
                                    <div className='landing_infrastructure-titleText'>
                                        ІНФРАСТРУКТУРА ПОРЯД
                                    </div>
                                    <div className='landing_infrastructure-line' />
                                </div>
                                <div className='landing_infrastructure-image' />
                                <div className='landing_infrastructure-subtitle'>
                                    Все необхідне поруч
                        </div>
                                <div className='landing_infrastructure-text'>
                                    Все, що потрібно для вашої зручності знаходиться<br />
                                    всередині будинку або в кількох хвилинах пішки.<br />
                                    Від великих торгово-розважальних центрів<br />
                                    до невеликих затишних кав'ярень<br />
                                </div>
                                <Link to='/infrastructure' className='landing-infrastructure-button'>
                                    Більше інформації
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='sixthBlock'>
                        <div className='landing_gallery'>
                            <div className='landing_gallery-header'>
                                <div className='landing_gallery-title'>Галерея</div>
                                <Link to='/gallery' className='landing_gallery-wrapper'>
                            <div className='landing_gallery-all'>Дивитись усі рендери</div>
                            <div className='landing_gallery-arrowIcon' />
                        </Link>
                            </div>
                            <div onClick={() => {
                this.setState({
                    popupIsOpen: true
                })
            }}>
                                <Gallery />
                                <div>
                                    <div className='landing-gallery-progressLine'>
                                        <div className='landing-gallery-currentProgress' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='seventhBlock'>
                        <div className='landing_news'>
                            <div className='landing_news-header'>
                                <div className='landing_news-title'>Новини</div>
                                <div className='landing_news-wrapper'>
                                    <div className='landing_news-all'>Усі новини</div>
                                    <div className='landing_news-arrowIcon' />
                                </div>
                            </div>
                            <div className='landing_news-itemWrapper'>
                                <div className='landing_news-item'>
                                    <div className='landing_news-firstImage' />
                                    <div className='landing_news-date'>20/08/2020</div>
                                    <div className='landing_news-text'>
                                        Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                                    <div className='landing_news-arrowIcon' />
                                </div>
                                <div className='landing_news-item'>
                                    <div className='landing_news-secondImage' />
                                    <div className='landing_news-date'>20/08/2020</div>
                                    <div className='landing_news-text'>
                                        Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                                    <div className='landing_news-arrowIcon' />
                                </div>
                                <div className='landing_news-item'>
                                    <div className='landing_news-thirdImage' />
                                    <div className='landing_news-date'>20/08/2020</div>
                                    <div className='landing_news-text'>
                                        Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                                    <div className='landing_news-arrowIcon' />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='eighthBlock'>
                        <Subscribe />
                    </div>
                    <div className='ninthBlock'>
                        <div className='landing_other'>
                            <div className='landing-other-left'>
                                <div className='landing_other-title'>
                                    <div className='landing_other-line' />
                                    <div className='landing_other-titleText'>
                                        ПРОЕКТИ
                                    </div>
                                    <div className='landing_other-line' />
                                </div>
                                <div className='ninthBlock-wrapper'>
                                    <div className='landing_other-subtitle'>
                                        Інші проекти<br />
                                        від забудовника<br />                                        
                                        &#171;Креатор-Буд&#187;
                                    </div>
                                    <div className='landing_other-logo' />
                                </div>
                            </div>
                            <div className='landing-other-right'>
                                <div className='landing-other-rightWrapper'>
                                    <div className='landing-other-wrapper'>
                                        <div className='landing-house-buttonWrapper'>
                                            <div className='landing-house-ArrowButton'>
                                                &#8594;
                                            </div>
                                            <div className='landing-house-ArrowButton'>
                                                &#8592;
                                            </div>
                                        </div>
                                    </div>
                                    <a a href='https://creatorcity.com.ua/' className='landing-other-projectBlock'>
                                        <div className='landing-other-imageFirst' />
                                        <div className='landing-other-imageText'>ЖК Creator City</div>
                                    </a>
                                    <a href='http://nauki58.com.ua/' className='landing-other-projectBlock'>
                                        <div className='landing-other-imageSecond' />
                                        <div className='landing-other-imageText'>ЖК Науки 58</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Landing