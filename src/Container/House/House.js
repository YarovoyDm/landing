import React from 'react'
import * as _ from 'lodash'
import { ReactComponent as HouseSvg } from '../../Images/house.svg';
import {createBrowserHistory} from '../../history'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './House.module.scss'

class House extends React.Component {

    componentDidMount(){
        const paths = document.getElementsByClassName('floor');
        _.forEach(paths, path => path.addEventListener('click',() => {
            this.props.history.push('/house/floor-plan');
        }))
    }

    render() {
        return (
            <div className={style.house}>
                <Breadcrumbs current='БУДИНОК' blackMode/>
                <div className={style.houseTitle}>ОБЕРІТЬ ПОВЕРХ</div>
                <HouseSvg className={style.houseImage}/>
            </div>
        )
    }
}

export default House