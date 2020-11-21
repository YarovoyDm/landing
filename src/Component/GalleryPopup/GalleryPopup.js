import React from 'react'
import Gallery from '../Gallery/Gallery'
import cn from 'classnames'
import style from './GalleryPopup.module.scss'

class GalleryPopup extends React.Component {
    state={
        tabValue: 0
    }

    handleChange = (index) => {
        this.setState({ tabValue: index })
    }

    rednerTabInfo = () => {
        if (this.props.imageType === 1) {
            return <div className={style.inImage1} />
        }
        if (this.props.imageType === 2) {
            return <div className={style.inImage2} />
        }
        if (this.props.imageType === 3) {
            return <div className={style.inImage3} />
        }
        if (this.props.imageType === 4) {
            return <div className={style.inImage4} />
        }
        if (this.props.imageType === 5) {
            return <div className={style.inImage5} />
        }
    }

    render() {
        return (
            <div className={style.galleryPopup}>
                <div className={style.galleryInfoWrapper}>
                    <div className={style.popupCrossWrapper}>
                        <div className={style.popupCross} onClick={() => {
                            this.props.handle()
                        }}/> 
                    </div>
                    <div className={style.infoWrapper}>{this.rednerTabInfo()}</div>
                </div>
            </div>
        )
    }
}

export default GalleryPopup