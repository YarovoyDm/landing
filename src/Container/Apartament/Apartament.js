import React from 'react'
import * as _ from 'lodash'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Apartament.module.scss'

class Apartament extends React.Component {
    render() {
        const correctPath = _.includes(this.props.match.path, '/layot')
        console.log({correctPath: this.props.match})
        return (
            <div className={style.apartament}>
                    <Breadcrumbs current='A0' steps={3} secondStep={correctPath ? "ПЛАНУВАННЯ КВАРТИР" : "КОМЕРЦІЙНА НЕРУХОМІСТЬ"} secondStepUrl={correctPath ? '/layot' : '/commercial-property'}/>
                <div className={style.apartamentLeft}>
                    <div className={style.leftHeader}>
                        <div className={style.headerType}>A0</div>
                        <div className={style.headerPrice}>Ціна 2 450 200 грн</div>
                    </div>
                    <div className={style.leftTitle}>
                        <div className={style.titleItem}>
                            <div className={style.titleHead}>КІМНАТИ</div>
                            <div className={style.titleValue}>3</div>
                        </div>
                        <div className={style.titleItem}>
                            <div className={style.titleHead}>ПОВЕРХ</div>
                            <div className={style.titleValue}>8</div>
                        </div>
                        <div className={style.titleItem}>
                            <div className={style.titleHead}>ПЛОЩА</div>
                            <div className={style.titleValue}>104,88 м&#178;</div>
                        </div>
                    </div>
                    <div className={style.leftMain}>
                        <div className={style.mobileWrapper}>
                            <div className={style.mobileGroup}>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Житлова площа</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        78,30 м&#178;
                                    </div>
                                </div>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Передпокій</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        9,30 м&#178;
                                    </div>
                                </div>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Коридор</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        12,13 м&#178;
                                    </div>
                                </div>
                            </div>
                            <div className={style.mobileGroup}>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Ванна кімната</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        7,65 м&#178;
                                    </div>
                                </div>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Санвузол</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        5,34 м&#178;
                                    </div>
                                </div>
                                <div className={style.specificationsWrapper}>
                                    <div className={style.mainTitle}>Кухня-вітальня</div>
                                    <div className={style.line} />
                                    <div className={style.specificationsValue}>
                                        60,65 м&#178;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.leftRequestButton}>Залишити заявку</div>
                    <div className={style.buttonsWrapper}>
                        <div className={style.leftConditionsButton}>Умови розстрочки</div>
                        <div className={style.leftPdfButton}>Завантажити PDF</div>
                    </div>
                </div>
                <div className={style.apartamentRight}>
                    <div className={style.windIcon}/>
                    <div className={style.currenApartamentIcon}/>
                    <div className={style.saleBlock}>
                        <div className={style.starIcon}/>
                        <div className={style.saleText}>Акційна пропозиція</div>
                    </div>
                    <div className={style.righHeader}>
                        <div className={style.headerButtons}>
                            <div className={style.buttonTechnical}>
                                Технічне планування
                            </div>
                            <div className={style.button3D}>
                                3D планування
                            </div>
                        </div>
                        <div className={style.headerWindowButton}>Вид з вікна</div>
                    </div>
                    <div className={style.rightImage} />
                </div>
            </div>
        )
    }
}

export default Apartament