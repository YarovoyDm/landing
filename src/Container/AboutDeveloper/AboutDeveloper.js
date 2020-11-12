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
                        </div>
                        <div className='landing_other-logo' />
                    </div>
                    <div className='landing-other-right'>
                        <OtherSlider />
                    </div>
                </div>
            </>
        )
    }
}

export default AboutDeveloper