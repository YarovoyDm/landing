import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './ConstructionTechnology.module.scss'

class ConstructionTechnology extends React.Component {
    render() {
        return (
            <>
                <div className={style.technology}>
                    <Breadcrumbs current='ИНФРАСТРУКТУРА'/>
                    <div className={style.technologyImage} />
                    <div className={style.technologyMainText}>
                        <div className={style.technologyTitle}>
                            ТЕХНОЛОГІЯ <br />
                            БУДІВНИЦТВА
                        </div>
                        <div className={style.technologyText}>
                            Стриманість та функціональність сучасної архітектури,
                            інноваційні інженерні рішення, безпрецедентні умови для
                            комфорту мешканців та найкраще розташування в центрі міста - 
                            всі ці переваги органічно поєднуються у житловому комплексі Krauss Gallery 
                        </div>
                    </div>
                    
                </div>
                <div className={style.technologyFirstBlock}>
                    <div className={style.firstBlockImage}/>
                    <div className={style.firstBlockText}>
                        <div className={style.textTitle}>
                            Архітектурно-тенхічні рішення
                        </div>
                        <ul>
                            <li className={style.li}>Технологія будівництва - монолітно-каркасна</li>
                            <li className={style.li}>Внутрішні та зовнішні стіни - керамічна цегла 250мм</li>
                            <li className={style.li}>Вікна - енергозберігаючий склопакет</li>
                            <li className={style.li}>Утеплювач - мінеральна вата товщиною 150мм</li>
                        </ul>
                    </div>
                </div>
                <div className={style.specifications}>
                    <div className={style.specificationLeft}>
                        <div className={style.leftTitle}>Технічні характеристики</div>
                        <ul>
                            <li className={style.li}>
                                <div className={style.specificationsWrapper}>
                                    <div>Кількість поверхів</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        10
                                    </div>
                                </div>
                            </li>
                            <li className={style.li}><div className={style.specificationsWrapper}>
                                    <div>Квартир на поверсі</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        12
                                    </div>
                                </div>
                            </li>
                            <li className={style.li}><div className={style.specificationsWrapper}>
                                    <div>Кількість квартир</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        100
                                    </div>
                                </div>
                            </li>
                            <li className={style.li}><div className={style.specificationsWrapper}>
                                    <div>Висота стель</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        3,3м
                                    </div>
                                </div>
                            </li>
                            <li className={style.li}><div className={style.specificationsWrapper}>
                                    <div>Опалення</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        автономне (в будинку)
                                    </div>
                                </div>
                            </li>
                            <li className={style.li}><div className={style.specificationsWrapper}>
                                    <div>Паркінг</div>
                                    <div className={style.line}/>
                                    <div className={style.specificationsValue}>
                                        підземний
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={style.specificationRight} />
                </div>
            </>
        )
    }
}

export default ConstructionTechnology