import React from 'react'
import OtherSlider from '../../Component/OtherSlider/OtherSlider';
import Subscribe from '../../Component/Subscribe/Subscribe';
import { Link } from 'react-router-dom';
import style from './AboutDeveloper.module.scss'

class AboutDeveloper extends React.Component {
    render() {
        return (
            <>
                <div className={style.aboutDeveloper}>
                    <div className={style.aboutImage} />
                    <div className={style.aboutTitleBlock}>
                        <div className={style.titleLeft}>
                            <div className={style.title}>
                                ПРО ЗАБУДОВНИКА
                            </div>
                            <div className={style.logo}/>
                        </div>
                        <div className={style.titleRight}>
                            <div className={style.text}>
                                Стриманість та функціональність сучайної архітектури, 
                                інноваційні інженерні рішення, безпрецедентні умови для
                                комфорту мешканців та найкраще розташування в центрі міста
                                - всі ці переваги органічно поєднуються у житловому комплексі 
                                &#171;Krauss Gallery&#187;
                            </div>
                            <div className={style.button}>Перейти на сайт</div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.firstBlock}>
                    <div className={style.firstImage}/>
                    <div className={style.firstWrapper}>
                        <div className={style.firstInfro}>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    2006
                                </div>
                                <div className={style.itemText}>
                                    Рік заснування
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    12 ЖК
                                </div>
                                <div className={style.itemText}>
                                    Побудовано
                                </div>
                            </div>
                            <div className={style.infoItem}>
                                <div className={style.itemTitle}>
                                    16 ЖК
                                </div>
                                <div className={style.itemText}>
                                    Будується
                                </div>
                            </div>
                        </div>
                        <div className={style.firstText}>
                            За 14 років успішної роботи на ринку нерухомості України
                            підприємство зарекомендовало себе надійним партнером, який завжди
                            виконує зобов'язання. Ми сфокусовані на будівництві
                            житлової та комерційної нерухомості, в портфелі Кретор-Буд
                            поняд 50 проектів.
                        </div>
                    </div>
                </div>
                <div className={style.secondBlock}>
                    <div className={style.secondTop}>
                        <div className={style.toptextWrapper}>
                            <div className={style.topTitle}>
                                Клубність
                            </div>
                            <div className={style.topText}>
                                За 14 років успішної роботи на ринку нерухомості України
                                підприємство зарекомендовало себе надійним партнером, який завжди
                                виконує зобов'язання. Ми сфокусовані на будівництві
                                житлової та комерційної нерухомості, в портфелі Кретор-Буд
                                поняд 50 проектів.
                            </div>
                        </div>
                        <div className={style.topImage}/>
                    </div>
                    <div className={style.secondBottom}>
                        <div className={style.botImage}/>
                        <div className={style.toptextWrapper}>
                            <div className={style.topTitle}>
                                Іновації
                            </div>
                            <div className={style.topText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                </div>
                <div className='landing_news'>
                    <div className='landing_news-header'>
                        <div className='landing_news-title'>Новини</div>
                        <div className='landing_news-wrapper'>
                            <Link to='/news' className='landing_news-all'>Усі новини</Link>
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
                            &#171;Креатор-Буд&#187;
                            <div className='landing_other-logo' />
                        </div>
                        
                    </div>
                    <div className='landing-other-right'>
                        <OtherSlider/>
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
            </>
        )
    }
}

export default AboutDeveloper