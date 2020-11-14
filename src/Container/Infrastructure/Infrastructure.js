import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Infrastructure.module.scss'

class Infrastructure extends React.Component {
    render() {
        return (
            <>
                <div className={style.infrastructure}>
                    <Breadcrumbs current='ИНФРАСТРУКТУРА'/>
                    <div className={style.infrastructureImage} />
                    <div className={style.infrastructureMainText}>
                        <div className={style.infrastructureTitle}>
                            ІНФРАСТРУКТУРА ПОРЯД
                        </div>
                        <div className={style.infrastructureText}>
                            Стриманість та функціональність сучасної архітектури,
                            інноваційні інженерні рішення, безпрецедентні умови для
                            комфорту мешканців та найкраще розташування в центрі міста - 
                            всі ці переваги органічно поєднуються у житловому комплексі Krauss Gallery 
                        </div>
                    </div>   
                </div>
                <div className={style.infrastructureFirst}>
                    <div className={style.firstTop}>
                        <div className={style.topImage}/>
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                У центрі подій
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                    <div className={style.firstMiddle}>
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                Усе що потрібно поряд
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                        <div className={style.middleImage}/>
                    </div>
                    <div className={style.firstBottom}>
                        <div className={style.botImage}/>
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                Магазин
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.infrastructureSecond}>
                    <div className={style.secondWrapper}>
                        <div className={style.planTitle}>Генплан території</div>
                        <div className={style.planTextWrapper}>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>Територія для відпочинку</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>Контроль доступу до авто</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>Гостьові парковки</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>В'їзд / виїзд з паркінгу</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>Вхід / вихід з будинку</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle}/>
                                <div className={style.itemText}>Територія для відпочинку</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.secondimage}/>
                </div>
            </>
        )
    }
}

export default Infrastructure