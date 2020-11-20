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
        if (this.state.tabValue === 0) {
            return <div className={style.inImage} />
        }
        if (this.state.tabValue === 1) {
            return <div className={style.inImage} />
        }
        if (this.state.tabValue === 2) {
            return <div className={style.inImage} />
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
                    <div className={style.botomHeader}>
                        <div className={cn(style.headerItemActive, { [style.activeButton]: this.state.tabValue === 0 })} onClick={() => this.handleChange(0)}>Екстер'єр</div>
                        <div className={cn(style.headerItem, {[style.activeButton]: this.state.tabValue === 1})} onClick={() => this.handleChange(1)}>Інтер'єр</div>
                        <div className={cn(style.headerItem, {[style.activeButton]: this.state.tabValue === 2})} onClick={() => this.handleChange(2)}>Лобі</div>
                    </div>
                    <div className={style.infoWrapper}>{this.rednerTabInfo()}</div>
                </div>
            </div>
        )
    }
}

export default GalleryPopup