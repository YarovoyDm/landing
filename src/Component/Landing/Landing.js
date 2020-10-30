import React from 'react'
import Subscribe from '../Subscribe/Subscribe';

import './Landing.css'

import { ReactComponent as Arrow } from '../../Images/downArrowLanding.svg';
import Slider from '../Slider/Slider';
import Gallery from '../Gallery/Gallery';
import OtherSlider from '../OtherSlider/OtherSlider';

const sliders = []

class Landing extends React.Component {



    render() {
        return (
            <><div className='landing'>

                {/* <Swiper tag='section' wrapperTag='ul' id='main'>{sliders}</Swiper> */}
                <div className='landing_intro'>
                    <div className='landing_intro-top'>
                        <div className='socialIcons_wrapper'>
                            <div className='social-facebook' />
                            <div className='social-instagram' />
                            <div className='social-telegram' />
                        </div>
                        <div className='landing_intro-topLeft'>
                            <div className='landing_intro-title'>
                                ART<br />
                                OF PERFECT<br />
                                LIVING
                            </div>
                            <div className='landing-house-button'>Обрати квартиру</div>
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
                                                від 50.5 м&#178;
                                            </div>
                                        </div>
                                        <div>
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
                                                від 76.8 м&#178;
                                            </div>
                                        </div>
                                        <div>
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
                                                від 80.6 м&#178;
                                            </div>
                                        </div>
                                        <div>
                                            <div className='houseTypeBot-title'>
                                                Ціна за м&#178;
                                            </div>
                                            <div className='houseTypeBot-value'>
                                                від 38 200 грн
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='landing_intro-houseTypeItem'>
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
                                </div>
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
                                    АКЦІЇ ТА ЗНИЖКИ
                                </div>
                            </div>
                            <div className='landing_intro-subtitle'>
                                Вигідні пропозиції<br />
                                від забудовника
                            </div>
                            <div className='landing_intro-text'>
                                Дізнайтеся про найвигідніші умови купівлі вашої<br />
                                майбутньої оселі в житловому комплексі &#171;Krauss&#187;<br />
                            </div>
                            <div className='landing-itro-button'>Детальніше</div>
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
                                Задавати тон і ритм, але зливатися з музикою<br />
                                архітектури. Жити у серці мегаполісу і бачити<br />
                                землю до самого горизонту. Бути помітною<br />
                                постаттю, але розчинятися в просторі, наповненому<br />
                                світлом
                            </div>
                            <div className='landing-house-button'>Обрати квартиру</div>
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
                                Ми зводимо житловий комплекс &#171;Krauss&#187;<br />
                                За сучасними технологіями будівництва<br />
                                з використанням матеріалів високої якості<br />
                            </div>
                            <div className='landing-house-botButton'>Більше інформації</div>
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
                            ЖК Krauss
                        </div>
                        <div className='landing_constractionStatus-button'>
                            Детальніше
                        </div>
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
                            Ми знаємо, що ваш найцінніший ресурс - це час<br />
                            Саме тому житловий комплекс &#171;Krauss&#187; матиме<br />
                            власну розвинену інфраструктуру на перших<br />
                            поверхах, а все необхідне для життя, роботи та<br />
                            відпочинку розташоване в пішій доступності<br />
                        </div>
                        <div className='landing-infrastructure-button'>
                            Більше інформації
                        </div>
                    </div>
                </div>
                <div className='landing_gallery'>
                    <div className='landing_gallery-header'>
                        <div className='landing_gallery-title'>Галерея</div>
                        <div className='landing_gallery-wrapper'>
                            <div className='landing_gallery-all'>Дивитись усі рендери</div>
                            <div className='landing_gallery-arrowIcon' />
                        </div>
                    </div>
                    <div>
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
                            Креатор-Буд
                        </div>
                        <div className='landing_other-logo' />
                    </div>
                    <div className='landing-other-right'>
                        <OtherSlider />
                    </div>
                </div>
            </div>
                <div className='landingMobile'>
                    <div>
                        <div className='landingMobile-itroImage' />
                    </div>
                    <div className='landingMobile-secondBlock'>
                        <div className='landing-intro-goDownButton'>
                            <Arrow />
                        </div>
                        <div className='secondBlock-absolute'>
                            <div className='landing_intro-title'>
                                ART<br />
                                OF PERFECT<br />
                                LIVING
                            </div>
                            <div className='landing-house-button'>Обрати квартиру</div>
                        </div>
                        <div className="secondBlock-data">
                            
                            <div className='landing_intro-right'>
                                <div className='landing_intro-BotTitle'>
                                    <div className='landing_house-line' />
                                    <div className='landing_house-titleText'>
                                        АКЦІЇ ТА ЗНИЖКИ
                                    </div>
                                    <div className='landing_house-line' />
                                </div>
                                <div className='landing_intro-botImage' />
                                <div className='landing_intro-subtitle'>
                                    Вигідні пропозиції<br />
                                від забудовника
                            </div>
                                <div className='landing_intro-text'>
                                    Дізнайтеся про найвигідніші умови купівлі вашої<br />
                                майбутньої оселі в житловому комплексі &#171;Krauss&#187;<br />
                                </div>
                                <div className='landing-itro-button'>Детальніше</div>
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
                                    Задавати тон і ритм, але зливатися з музикою<br />
                                архітектури. Жити у серці мегаполісу і бачити<br />
                                землю до самого горизонту. Бути помітною<br />
                                постаттю, але розчинятися в просторі, наповненому<br />
                                світлом
                            </div>
                                <div className='landing-house-button'>Обрати квартиру</div>
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
                                    Ми зводимо житловий комплекс &#171;Krauss&#187;<br />
                                За сучасними технологіями будівництва<br />
                                з використанням матеріалів високої якості<br />
                                </div>
                                <div className='landing-house-botButton'>Більше інформації</div>
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
                                    ЖК Krauss
                            </div>
                            <div className='landing_constractionStatus-button'>
                                Детальніше
                                </div>
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
                                    Ми знаємо, що ваш найцінніший ресурс - це час<br />
                            Саме тому житловий комплекс &#171;Krauss&#187; матиме<br />
                            власну розвинену інфраструктуру на перших<br />
                            поверхах, а все необхідне для життя, роботи та<br />
                            відпочинку розташоване в пішій доступності<br />
                                </div>
                                <div className='landing-infrastructure-button'>
                                    Більше інформації
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className='sixthBlock'>
                        <div className='landing_gallery'>
                            <div className='landing_gallery-header'>
                                <div className='landing_gallery-title'>Галерея</div>
                                <div className='landing_gallery-wrapper'>
                                    <div className='landing_gallery-all'>Усі рендери</div>
                                    <div className='landing_gallery-arrowIcon' />
                                </div>
                            </div>
                            <div>
                                <Gallery />
                                <div>
                                    <div className='landing-gallery-progressLine'>
                                        <div className='landing-gallery-currentProgress' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='seventhBlock'>
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
                    </div>
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
                                        Креатор-Буд
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
                                    <div className='landing-other-projectBlock'>
                                        <div className='landing-other-imageFirst' />
                                        <div className='landing-other-imageText'>ЖК Creator City</div>
                                    </div>
                                    <div className='landing-other-projectBlock'>
                                        <div className='landing-other-imageSecond' />
                                        <div className='landing-other-imageText'>ЖК Науки 58</div>
                                    </div>
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