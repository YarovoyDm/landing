import React from 'react'
import * as _ from 'lodash'
import cn from 'classnames'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Apartament.module.scss'
import Feedback from '../../Component/Feedback/Feedback'

class Apartament extends React.Component {

    state = {
        tabValue: 0,
        popupIsOpen: false
    }

    handleChange = (index) => {
        this.setState({ tabValue: index })
    }

    rednerTabInfo = () => {
        if (this.state.tabValue === 0) {
            return <div className={style.rightImage} />
        }
        if (this.state.tabValue === 1) {
            return <div className={style.image3D} />
        }
        if (this.state.tabValue === 2) {
            return <div className={style.imageWindowView} />
        }
    }

    popupHandle = () => {
        this.setState({
            popupIsOpen: false
        })
        document.body.style.overflow = 'visible'
    }

    popupOpen = () => {
        const isMobile = window.screen.width <= 1024
        this.setState({
            popupIsOpen: true
        }, () => {
            if(isMobile){document.body.style.overflow = 'hidden'}
        })
    }

    render() {
        const correctPath = _.includes(this.props.match.path, '/layot')
        
        return (
            <div className={style.apartament}>
                {this.state.popupIsOpen && <Feedback handle={this.popupHandle} />}
                <Breadcrumbs current='A0' steps={3} secondStep={correctPath ? "ПЛАНУВАННЯ КВАРТИР" : "КОМЕРЦІЙНА НЕРУХОМІСТЬ"} secondStepUrl={correctPath ? '/layot' : '/commercial-property'} />
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
                    <div className={style.leftRequestButton} onClick={() => this.popupOpen()}>Залишити заявку</div>
                    <div className={style.buttonsWrapper}>
                        <div className={style.leftConditionsButton}>Умови розстрочки</div>
                        <div className={style.leftPdfButton}>Завантажити PDF</div>
                    </div>
                </div>
                <div className={style.apartamentRight}>
                    <div className={style.windIcon} />
                    <div className={style.currenApartamentIcon} />
                    <div className={style.saleBlock}>
                        <div className={style.starIcon} />
                        <div className={style.saleText}>Акційна пропозиція</div>
                    </div>
                    <div className={style.righHeader}>
                        <div className={style.headerButtons}>
                            <div className={cn(style.buttonTechnical, { [style.buttonActive]: this.state.tabValue === 0 })} onClick={() => this.handleChange(0)}>
                                Технічне планування
                            </div>
                            <div className={cn(style.button3D, { [style.buttonActive]: this.state.tabValue === 1 })} onClick={() => this.handleChange(1)}>
                                3D планування
                            </div>
                        </div>
                        <div className={style.headerWindowButton} onClick={() => this.handleChange(2)}>Вид з вікна</div>
                    </div>
                    {this.rednerTabInfo()}
                </div>
            </div>
        )
    }
}

export default Apartament