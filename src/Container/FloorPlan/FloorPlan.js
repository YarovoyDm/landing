import React from 'react'
import style from  './FloorPlan.module.scss'

class FloorPlan extends React.Component {
    render() {
        return (
            <div className={style.floorPlan}>
                <div className={style.floorTitle}>ОБЕРІТЬ ПЛАНУВАННЯ</div>
                <div className={style.floorImage}/>
            </div>
        )
    }
}

export default FloorPlan