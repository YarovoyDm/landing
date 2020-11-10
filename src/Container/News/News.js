import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import Subscribe from '../../Component/Subscribe/Subscribe'
import style from './News.module.scss'

class News extends React.Component {
    render() {
        return (
            <>
                <div className={style.news}>
                    <Breadcrumbs current='НОВИНИ ТА АКЦІЇ'/>
                    <div className={style.newsTitle}>НОВИНИ ТА АКЦІЇ</div>
                    <div className={style.newsWrapper}>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsFirstImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsSecondImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsThirdImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                    </div>
                </div>
                <Subscribe />
                <div className={style.newsBot}>
                    <div className={style.newsWrapper}>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsFirstImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsSecondImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsThirdImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                    </div>
                    <div className={style.newsWrapper}>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsFirstImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsSecondImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                        <Link to='/news/change-in-work-schedule' className={style.newsItem}>
                            <div className={style.newsThirdImage} />
                            <div className={style.newsDate}>20/08/2020</div>
                            <div className={style.newsItemTitle}>
                                Зміни в графіку роботи відділу<br />
                                продажів в День Незалежності
                            </div>
                            <div className={style.newsArrow} />
                        </Link>
                    </div>
                </div>
                
            </>
        )
    }
}

export default News