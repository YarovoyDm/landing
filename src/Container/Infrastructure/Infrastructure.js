import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import GoogleMapReact from 'google-map-react';
import style from './Infrastructure.module.scss'

class Infrastructure extends React.Component {
    state={
        isGoogleMapsLoad: false
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    onMapChange =() => {
        this.setState({isGoogleMapsLoad: true})
    }
    render() {
        return (
            <>
                <div className={style.infrastructure}>
                    <Breadcrumbs current='ИНФРАСТРУКТУРА' />
                    <div className={style.infrastructureImage} />
                    <div className={style.infrastructureMainText}>
                        <div className={style.infrastructureTitle}>
                            ІНФРАСТРУКТУРА ПОРЯД
                        </div>
                        <div className={style.infrastructureText}>
                            Стриманість та функціональність сучасної архітектури,
                            інноваційні інженерні рішення, безпрецедентні умови для
                            комфорту мешканців та найкраще розташування в центрі міста -
                            всі ці переваги органічно поєднуються у житловому комплексі Krauss Gallery
                        </div>
                    </div>
                </div>
                <div className={style.infrastructureFirst}>
                    <div className={style.firstTop}>
                        <div className={style.topImage} />
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                У центрі подій
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                    <div className={style.firstMiddle}>
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                Усе що потрібно поряд
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                        <div className={style.middleImage} />
                    </div>
                    <div className={style.firstBottom}>
                        <div className={style.botImage} />
                        <div className={style.toptextWrapper}>
                            <div className={style.wrapperTitle}>
                                Магазин
                            </div>
                            <div className={style.wrapperText}>
                                Ми знаємо, що ваш найцінніший ресурс - це час.
                                Саме тому житловий комплекс Krauss матиме власну
                                розвинену інфраструктура на перших поверхах,
                                а все необхідне для життя, роботи та відпочинку
                                розташоване у пішій доступності
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.infrastructureSecond}>
                    <div className={style.secondWrapper}>
                        <div className={style.planTitle}>Генплан території</div>
                        <div className={style.planTextWrapper}>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>Територія для відпочинку</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>Контроль доступу до авто</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>Гостьові парковки</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>В'їзд / виїзд з паркінгу</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>Вхід / вихід з будинку</div>
                            </div>
                            <div className={style.planItem}>
                                <div className={style.itemCircle} />
                                <div className={style.itemText}>Територія для відпочинку</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.bottonImage}/>
                </div>
                <div className={style.maps}>
                        {this.state.isGoogleMapsLoad ? <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyA0iOxpzr8dGr-6kZ5p-daTSNPub-6Tpt4' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                        </GoogleMapReact> : <div className={style.noMapsImage} onClick={() => this.onMapChange()} />}
                    </div>
            </>
        )
    }
}

export default Infrastructure