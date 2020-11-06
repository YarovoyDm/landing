import React from 'react'
import style from './ConstructionProgress.module.scss'

import constructionVideo from '../../Images/constractionStatus.jpg'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'

class ConstructionProgress extends React.Component {
    render() {
        return (
            <div className={style.constructionProgress}>
                <Breadcrumbs current='ХІД БУДІВНИЦТВА'/>
                <div className={style.top}>
                    <div className={style.topLeft}>
                        <div className={style.leftTitle}>ХІД БУДІВНИЦТВА</div>
                        <div className={style.leftText}>
                            Задавати тон і ритм, але зливатися з музикою
                            архітектури. Жити у серці мегаполісу, і бачити
                            землю до самого горизонту.
                        </div>
                        <div className={style.leftButtons}>
                            <div className={style.cameraButton}>Камера 1</div>
                            <div className={style.cameraButton}>Камера 2</div>
                        </div>
                    </div>
                    <img src={constructionVideo} className={style.video}/>
                </div>
                <div className={style.bottom}>
                    <div className={style.otherWrapper}>
                        <div className={style.item}>
                            <div className={style.otherImage}/>
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за серпень
                            </div>
                            <div className={style.arrow} />
                        </div>
                        <div className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за липень
                            </div>
                            <div className={style.arrow} />
                        </div>
                        <div className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за червень
                            </div>
                            <div className={style.arrow} />
                        </div>
                    </div>
                    <div className={style.moreButton}>Показати більше</div>
                </div>
            </div>
        )
    }
}

export default ConstructionProgress