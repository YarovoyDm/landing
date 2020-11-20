import React from 'react'
import ReactSlider from 'react-slider'
import { Range } from 'rc-slider';
import { Slider } from '@material-ui/core'
import * as _ from 'lodash'
import cn from 'classnames'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import Checkbox from '@material-ui/core/Checkbox';
import 'rc-slider/assets/index.css';
import style from './CommercialProperty.module.scss'
import { Link } from 'react-router-dom';

const apartamentsData = [
    {price: '2 500 000', name: 'A0', room1: true, rooms2: false, room3: true, penthouse: false, stage: '2', squere: '25', special: true, twoTier: true, species: false},
    {price: '2 500 000', name: 'A1', room1: true, rooms2: false, room3: true, penthouse: true, stage: '2', squere: '30', special: false, twoTier: false, species: false},
    {price: '2 500 000', name: 'A2', room1: false, rooms2: false, room3: true, penthouse: false, stage: '5', squere: '30', special: true, twoTier: true, species: true},
    {price: '2 500 000', name: 'A3', room1: true, rooms2: false, room3: true, penthouse: true, stage: '4', squere: '30', special: false, twoTier: false, species: false},
    {price: '2 500 000', name: 'A4', room1: false, rooms2: false, room3: false, penthouse: false, stage: '7', squere: '30', special: false, twoTier: true, species: true},
    {price: '2 500 000', name: 'A5', room1: true, rooms2: false, room3: true, penthouse: true, stage: '8', squere: '30', special: true, twoTier: true, species: false},
]

class CommercialProperty extends React.Component {

    state = {
        squere: [30, 50],
        floor: [2, 8],
        checkBoxFilter:{
            species: false,
            twoTier: false,
            special: false
        },
        roomsFilter:{
            room1: false,
            room2: false,
            room3: false,
            penthouse: false
        },
        roomsFiltered: null,
        checkboxFiltered: null,
        data: apartamentsData,
        renderData: apartamentsData,
        sortingPopupIsOpen: false,
        sortingValue: 'БІЛЬШІЙ ЦІНІ'
        
    }

    onSquereChange = (e, data) => {
        this.setState({ squere: data })
    }

    onFloorChange = (e, data) => {
        this.setState({ floor: data })
    }

    onRoomsChange = (type) => {
        this.setState({
            roomsFilter: {
                ...this.state.roomsFilter,
                [type]: !this.state.roomsFilter[type]
            }
        }, () => {
            let filterByRoom = _.map(_.pickBy(this.state.roomsFilter), (item, key) => key)
            if (!_.isEmpty(filterByRoom)) {
                let roomsFiltered = _.flatMap(filterByRoom, item => {
                    return _.filter(apartamentsData, data => data[item])
                })
                this.setState({
                    roomsFiltered: _.uniq(roomsFiltered)
                })
            }
            else {
                this.setState({
                    roomsFiltered: null
                })
            }})
    }

    onCheckboxChange= (type) => {
        this.setState({
            checkBoxFilter: {
                ...this.state.checkBoxFilter,
                [type]: !this.state.checkBoxFilter[type]
            }
        }, () => {
            let filterByCheck = _.map(_.pickBy(this.state.checkBoxFilter), (item, key) => key)
            console.log({filterByCheck})
            if (!_.isEmpty(filterByCheck)) {
                const getData = this.state.roomsFiltered ? this.state.roomsFiltered : apartamentsData
                let checkboxFiltered = _.flatMap(filterByCheck, item => {
                    return _.filter(getData, data => data[item])
                })
                this.setState({
                    checkboxFiltered: _.uniq(checkboxFiltered)
                })
            }
            else {
                this.setState({
                    checkboxFiltered: null
                })
            }
        })
    }

    updateData = () => {
        if(this.state.roomsFiltered){
            this.state.data = this.state.roomsFiltered
        }
        if(this.state.checkboxFiltered){
            this.state.data = this.state.checkboxFiltered
        }
        if(!this.state.checkboxFiltered && !this.state.roomsFiltered){
            this.state.data = apartamentsData
        }
        const stageFilter = _.filter(this.state.data, item => {
            return item.stage >= this.state.floor[0] && item.stage <= this.state.floor[1]
        })
        this.setState({
            renderData:_.filter(stageFilter, item => {
                return item.squere >= this.state.squere[0] && item.squere <= this.state.squere[1]
            })
        })
    }

    renderApartaments = () => {
        return _.map(this.state.renderData, item => {
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
                        <div className={style.filterValue}onClick={() => {
                            this.setState({
                                sortingPopupIsOpen: true
                            })
                        }}>
                            {this.state.sortingValue}
                        </div>
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
                <div className={style.bottom}>
                    <div className={style.bottomFilter}>
                        <div className={style.modileTopWrapper}>
                            <div className={style.filterRooms}>
                                <div className={style.roomsTitle}>КІЛЬКІСТЬ КІМНАТ</div>
                                <div className={style.roomsWrapper}>
                                    <div className={cn(style.roomsButton, {[style.active]: this.state.roomsFilter.room1})} onClick={() => this.onRoomsChange('room1')}>1</div>
                                    <div className={cn(style.roomsButton, {[style.active]: this.state.roomsFilter.room2})} onClick={() => this.onRoomsChange('room2')}>2</div>
                                    <div className={cn(style.roomsButton, {[style.active]: this.state.roomsFilter.room3})} onClick={() => this.onRoomsChange('room3')}>3</div>
                                    <div className={cn(style.roomsButton, {[style.active]: this.state.roomsFilter.penthouse})} onClick={() => this.onRoomsChange('penthouse')}>Пентхауси</div>
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
                                            checked={this.state.checkBoxFilter.species} 
                                            onChange={() =>this.onCheckboxChange('species')} 
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Видові квартири"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={this.state.checkBoxFilter.twoTier} 
                                            onChange={() => this.onCheckboxChange('twoTier')}  
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Дворівневі квартири"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox 
                                            checked={this.state.checkBoxFilter.special} 
                                            onChange={ () =>this.onCheckboxChange('special')} 
                                            name="checkedA" 
                                            color={'#ab9060'}
                                        />
                                    }
                                    label="Спеціальні пропозиції"
                                />
                            </div>
                        </div>
                        <div className={style.filterAccept} onClick={() => this.updateData()}>Показати</div>
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