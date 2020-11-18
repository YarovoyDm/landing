import React from 'react'
import Gallery from '../Gallery/Gallery'
import style from './GalleryPopup.module.scss'

class GalleryPopup extends React.Component {
    render() {
        return (
            <div className={style.galleryPopup}>
                <Gallery type={'popup'}/>
                <div>
                    <div className='landing-gallery-progressLine'>
                        <div className='landing-gallery-currentProgress' />
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryPopup