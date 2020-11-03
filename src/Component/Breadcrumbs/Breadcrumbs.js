import React from 'react'
import {Link} from 'react-router-dom'
import style from './Breadcrumbs.module.scss'

class Breadcrumbs extends React.Component {
    render() {
        return (
            <div className={style.breadcrumbs}>
                <div className={style.breadcrumbsLine} />
                <div className={style.breadcrumbsWrapper}>
                    <Link to='/' className={style.goToMainPage}>ГОЛОВНА</Link>
                    <div className={style.spread}>/</div>
                    <div className={style.currentPage}>{this.props.current}</div>
                </div>
            </div>
        )
    }
}

export default Breadcrumbs