import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './House.module.scss'

class House extends React.Component {
    render() {
        return (
            <div className={style.house}>
                <Breadcrumbs current='БУДИНОК'/>
                <div className={style.houseTitle}>ОБЕРІТЬ ПОВЕРХ</div>
                <div className={style.houseImage}/>
            </div>
        )
    }
}

export default House