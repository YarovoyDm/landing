import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Parking.module.scss'

class Parking extends React.Component {

    state={
        popupShow: false,
        sortingPopupIsOpen: false,
        sortingValue: 'БІЛЬШІЙ ЦІНІ'
    }

    onPopupChange= () => {
        this.setState({popupShow: !this.state.popupShow})
    }
    render() {
        return (
            <div className={style.parking}>
                {this.state.popupShow && <div className={style.parkingPopup}>
                    <div className={style.popupHeader}>
                        <div onClick={() => this.onPopupChange()} className={style.headerClose}>
                            <div className={style.closeIcon}/>
                        </div>
                    </div>
                    <div className={style.popupImage}/>
                </div>}
                <Breadcrumbs current='ПАРКІНГ'/>
                <div className={style.parkingHead}>
                    <div className={style.parkingTitle}>ПАРКІНГ</div>
                    <div className={style.parkingSort}>
                        <div className={style.sortTitle}>ФІЛЬТРУВАТИ ПО:</div>
                        <div className={style.sortValue} onClick={() => {
                            this.setState({
                                sortingPopupIsOpen: true
                            })
                        }}>{this.state.sortingValue}</div>
                        {this.state.sortingPopupIsOpen && <div className={style.sortingPopup}>
                            <div className={style.popupItem} onClick={() => {
                                this.setState({
                                    sortingPopupIsOpen: false,
                                    sortingValue: 'БІЛЬШІЙ ЦІНІ'
                                })
                            }}>БІЛЬШІЙ ЦІНІ</div>
                            <div className={style.popupItem} onClick={() => {
                                this.setState({
                                    sortingPopupIsOpen: false,
                                    sortingValue: 'МЕНШІЙ ЦІНІ'
                                })
                            }}>МЕНШІЙ ЦІНІ</div>
                        </div>}
                    </div>
                </div>
                <div className={style.parkingMain}>
                    <div className={style.mainItem} onClick={() => this.onPopupChange()}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}><div className={style.chooseHide}>Обрати</div><div className={style.chooseArrow}/></div>
                    </div>
                    <div className={style.mainItem} onClick={() => this.onPopupChange()}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose} ><div className={style.chooseHide}>Обрати</div><div className={style.chooseArrow}/></div>
                    </div>
                    <div className={style.mainItem} onClick={() => this.onPopupChange()}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose} ><div className={style.chooseHide}>Обрати</div><div className={style.chooseArrow}/></div>
                    </div>
                    <div className={style.mainItem} onClick={() => this.onPopupChange()}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose} ><div className={style.chooseHide}>Обрати</div><div className={style.chooseArrow}/></div>
                    </div>
                    <div className={style.mainItem} onClick={() => this.onPopupChange()}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}><div className={style.chooseHide}>Обрати</div><div className={style.chooseArrow}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parking