import React from 'react'
import ReactSlider from 'react-slider'
import { Range } from 'rc-slider';
import { Slider } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import Checkbox from '@material-ui/core/Checkbox';
import 'rc-slider/assets/index.css';
import style from './CommercialProperty.module.scss'
import { Link } from 'react-router-dom';

class CommercialProperty extends React.Component {

    state = {
        squere: [30, 50],
        floor: [2, 8],
        firstCheckbox: false,
        secondCheckbox: false,
        thirdCheckbox: false
    }

    onSquereChange = (e, data) => {
        this.setState({ squere: data })
    }

    onFloorChange = (e, data) => {
        this.setState({ floor: data })
    }

    onFirstCheckboxChange= (e) => {
        this.setState({ firstCheckbox: e.target.checked })
    }

    onSecondCheckboxChange= (e) => {
        this.setState({ secondCheckbox: e.target.checked })
    }

    onThirdCheckboxChange= (e) => {
        this.setState({ thirdCheckbox: e.target.checked })
    }

    render() {
        console.log({con: this.props.match})
        return (
            <div className={style.commercialProperty}>
                <Breadcrumbs current={this.props.match.path === '/layot' ? "ПЛАНУВАННЯ КВАРТИР" : "КОМЕРЦІЙНА НЕРУХОМІСТЬ"}/>
                <div className={style.top}>
                    <div className={style.topTitle}>
                    {this.props.match.path === '/layot' ? 'ПЛАНУВАННЯ КВАРТИР' : 'КОМЕРЦІЙНА НЕРУХОМІСТЬ'}
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
                        <div className={style.modileTopWrapper}>
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
                                <Slider
                                    onChange={this.onSquereChange}
                                    min={0}
                                    max={100}
                                    defaultValue={[30, 50]}
                                    step={0.1}
                                    value={this.state.squere}
                                />
                                <div className={style.squereInfo}>
                                    <div className={style.Min}>{this.state.squere[0]} м&#178;</div>
                                    <div className={style.Max}>{this.state.squere[1]} м&#178;</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.modileBotWrapper}>
                            <div className={style.filterSquere}>
                                <div className={style.squereTitle}>ПОВЕРХ</div>
                                <Slider
                                    onChange={this.onFloorChange}
                                    min={0}
                                    max={10}
                                    defaultValue={[2, 8]}
                                    value={this.state.floor}
                                />
                                <div className={style.squereInfo}>
                                    <div className={style.Min}>{this.state.floor[0]}</div>
                                    <div className={style.Max}>{this.state.floor[1]}</div>
                                </div>
                            </div>
                            <div className={style.filterCheckbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={this.state.firstCheckbox} 
                                            onChange={this.onFirstCheckboxChange} 
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Видові квартири"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={this.state.secondCheckbox} 
                                            onChange={this.onSecondCheckboxChange} 
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Дворівневі квартири"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={this.state.thirdCheckbox} 
                                            onChange={this.onThirdCheckboxChange} 
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Спеціальні пропозиції"
                                />
                            </div>
                        </div>
                        <div className={style.filterAccept}>Показати</div>
                    </div>
                    <div className={style.bottomData}>
                        <div className={style.bottomDataWrapper}>
                            <Link to={this.props.match.path === '/layot' ? '/layot/A0' : '/commercial-property/A0'} className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>від 2 000 000</div>
                                    </div>
                                </div>
                            </Link>
                            <div className={style.item}>
                                <div className={style.itemTop}>
                                    <div className={style.itemImage} />
                                    <div className={style.itemType}>A02</div>
                                </div>
                                <div className={style.itemBottom}>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Загальна площа</div>
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
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
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
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
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
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
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
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
                                        <div className={style.itemLine} />
                                        <div className={style.botValue}>91,5 м&#178;</div>
                                    </div>
                                    <div className={style.itemWrapper}>
                                        <div className={style.botTitle}>Ціна</div>
                                        <div className={style.itemLine} />
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