import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import Subscribe from '../../Component/Subscribe/Subscribe'
import style from './NewsPage.module.scss'

class NewsPage extends React.Component {
    render() {
        return (
            <>
                <div className={style.newsPage}>
                <Breadcrumbs current='ЗМІНИ В ГРАФІКУ РОБОТИ' steps={3} secondStep={"НОВИНИ ТА АКЦІЇ"} secondStepUrl={'/news'}/>
                    <div className={style.newsPageHeader}>
                        <div className={style.newsPageLabel}>
                            Знижки та акції
                        </div>
                        <div className={style.newsPageTitle}>
                            Зміни в графіку роботи відділу продажів в День Незалежності
                        </div>
                        <div className={style.newsPageDate}>20/08/2020</div>
                    </div>
                    <div className={style.newsImage} />
                    <div className={style.newsPageMain}>
                        <div className={style.mainText}>
                            Прогулянки старим містом - це щоденний привілей жителів
                            житлового комплексу &#171;Krauss Gallery&#187;, адже Поділ можна побачити навіть з вікна.
                            <br />
                            <br />
                            Поштова площа з неймовірними краєвидами на Дніпро; Контрактова площа
                            , на якій завжди вирує життя; колесо огляду, яке покаже Вам Поділ
                            із нових ракурсів; Андріївський узвіз із своїм неповторним колоритом
                            створить романтичний та творчий настрій на всі вихідні!
                            <br />
                            <br />
                            Чудове розташування комплексу &#171;Krauss Gallery&#187; - це можливість насолоджуватись
                            столицею і вдень і вночі
                        </div>
                    </div>
                    <div className={style.share}>
                        <div className={style.shareText}>Поділитись:</div>
                        <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className={style.socialFacebook}>
                            <div className={style.facebookIcon} />
                        </a>
                        <a target='_blank' href='https://www.instagram.com/krauss.gallery' className={style.socialInstagram}>
                            <div className={style.instagramIcon} />
                        </a>
                        <a target='_blank' href='https://t.me/kreator_bud' className={style.socialTelegram}>
                            <div className={style.telegramIcon} />
                        </a>
                    </div>
                </div>
                <div className={style.recNews}>
                    <div className={style.recTitle}>Читайте також</div>
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
            </>
        )
    }
}

export default NewsPage