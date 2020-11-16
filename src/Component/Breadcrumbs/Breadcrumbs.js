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
                    <div className={this.props.steps === 3 || this.props.blackMode ? style.greySpread : style.spread}>/</div>
                    {this.props.steps === 3 && <>
                        <Link to={this.props.secondStepUrl} className={style.secondStep}>
                            {this.props.secondStep}
                        </Link>
                        <div className={this.props.blackMode ? style.greySpread : style.spread}>/</div>
                    </>}
                    <div className={this.props.blackMode ? style.currentBlack : style.currentPage}>{this.props.current}</div>
                </div>
            </div>
        )
    }
}

export default Breadcrumbs