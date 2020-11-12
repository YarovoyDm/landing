import React from 'react'
import ReactSlider from 'react-slider'
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './CommercialProperty.module.scss'

class CommercialProperty extends React.Component {
    render() {
        return (
            <div className={style.commercialProperty}>
                <div className={style.top}>
                    <div className={style.topTitle}>
                        КОМЕРЦІЙНА<br />
                        НЕРУХОМІСТЬ
                    </div>
                    <div className={style.topFilter}>
                        <div className={style.filterTitle}>
                            ФІЛЬТРУВАТИ ПО:
                        </div>
                        <div className={style.filterValue}>
                            БІЛЬШІЙ ЦІНІ
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.bottomFilter}>
                        <div className={style.filterRooms}>
                            <div className={style.roomsTitle}>КІЛЬКІСТЬ КІМНАТ</div>
                            <div className={style.roomsWrapper}>
                                <div className={style.roomsButton}>1</div>
                                <div className={style.roomsButton}>2</div>
                                <div className={style.roomsButton}>3</div>
                                <div className={style.roomsButton}>Пентхауси</div>
                            </div>
                        </div>
                        <div className={style.filterSquere}>
                            <div className={style.squereTitle}>Площа м&#178;</div>
                        </div>
                    </div>
                    <div className={style.bottomData}>
                        <div className={style.bottomDataWrapper}>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.bottomDataWrapper}>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.bottomDataWrapper}>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine}/>
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommercialProperty