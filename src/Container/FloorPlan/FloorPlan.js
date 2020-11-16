import React from 'react'
import * as _ from 'lodash'
import { ReactComponent as FloorSvg } from '../../Images/floor.svg';
import style from  './FloorPlan.module.scss'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';

class FloorPlan extends React.Component {

    componentDidMount(){
        const paths = document.getElementsByClassName('floorPlan');
        _.forEach(paths, path => path.addEventListener('click',() => {
            this.props.history.push('/layot');
        }))
    }

    render() {
        return (
            <div className={style.floorPlan}>
                <Breadcrumbs current='ПЛАН ПОВЕРХУ' steps={3} secondStep={"БУДИНОК"} secondStepUrl={'/house'} blackMode/>
                <div className={style.floorTitle}>ОБЕРІТЬ ПЛАНУВАННЯ</div>
                <FloorSvg className={style.floorImage}/>
            </div>
        )
    }
}

export default FloorPlan