import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Parking.module.scss'

class Parking extends React.Component {
    render() {
        return (
            <div className={style.parking}>
                <Breadcrumbs current='ПАРКІНГ'/>
                <div className={style.parkingHead}>
                    <div className={style.parkingTitle}>ПАРКІНГ</div>
                    <div className={style.parkingSort}>
                        <div className={style.sortTitle}>ФІЛЬТРУВАТИ ПО:</div>
                        <div className={style.sortValue}>БІЛЬШІЙ ЦІНІ</div>
                    </div>
                </div>
                <div className={style.parkingMain}>
                    <div className={style.mainItem}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}>Обрати</div>
                    </div>
                    <div className={style.mainItem}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}>Обрати</div>
                    </div>
                    <div className={style.mainItem}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}>Обрати</div>
                    </div>
                    <div className={style.mainItem}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}>Обрати</div>
                    </div>
                    <div className={style.mainItem}> 
                        <div className={style.itemType}>Тип <div className={style.desktopText}>паркінгу</div> 1.2</div>
                        <div className={style.itemSquer}>16,2 м&#178;</div>
                        <div className={style.itemPrice}>550 000 грн</div>
                        <div className={style.itemChoose}>Обрати</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parking