import React from 'react'
import ReactSlider from 'react-slider'
import { Range } from 'rc-slider';
import { Slider } from '@material-ui/core'
import * as _ from 'lodash'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import Checkbox from '@material-ui/core/Checkbox';
import 'rc-slider/assets/index.css';
import style from './CommercialProperty.module.scss'
import { Link } from 'react-router-dom';

const apartamentsData = [
    {price: '2 500 000', name: 'A0', rooms: '1', stage: '2', squere: '30,3', special: true, twoTier: true, species: false},
    {price: '2 500 000', name: 'A1', rooms: '2', stage: '1', squere: '30,3', special: false, twoTier: false, species: false},
    {price: '2 500 000', name: 'A2', rooms: '2', stage: '5', squere: '30,3', special: true, twoTier: true, species: true},
    {price: '2 500 000', name: 'A3', rooms: '3', stage: '4', squere: '30,3', special: false, twoTier: false, species: false},
    {price: '2 500 000', name: 'A4', rooms: 'penthouse', stage: '7', squere: '30,3', special: false, twoTier: true, species: true},
    {price: '2 500 000', name: 'A5', rooms: '1', stage: '8', squere: '30,3', special: false, twoTier: true, species: false},
]

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

    renderApartaments = () => {
        return _.map(apartamentsData, item => {
            return <Link to={this.props.match.path === '/layot' ? '/layot/A0' : '/commercial-property/A0'} className={style.item}>
                        <div className={style.itemTop}>
                            <div className={style.itemImage} />
                            <div className={style.itemType}>{item.name}</div>
                        </div>
                        <div className={style.itemBottom}>
                            <div className={style.itemWrapper}>
                                <div className={style.botTitle}>Загальна площа</div>
                                <div className={style.itemLine} />
                                <div className={style.botValue}>{item.squere} м&#178;</div>
                            </div>
                            <div className={style.itemWrapper}>
                                <div className={style.botTitle}>Ціна</div>
                                <div className={style.itemLine} />
                                <div className={style.botValue}>від {item.price}</div>
                            </div>
                        </div>
                    </Link>
        })
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
                        {this.renderApartaments()}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommercialProperty