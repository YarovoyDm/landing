import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import GoogleMapReact from 'google-map-react';

import style from './Contacts.module.scss'
import Feedback from '../../Component/Feedback/Feedback';

class Contacts extends React.Component {
    state={
        isGoogleMapsLoad: false,
        popupIsOpen: false
    }

    popupHandle = () => {
        this.setState({
            popupIsOpen: false
        })
        document.body.style.overflow = 'visible'
    }

    popupOpen = () => {
        const isMobile = window.screen.width <= 1024
        this.setState({
            popupIsOpen: true
        }, () => {
            if(isMobile){document.body.style.overflow = 'hidden'}
        })
    }
    static defaultProps = {
        center: {
            lat: 50.4624754,
            lng: 30.4606355
        },
        zoom: 11
    };

    onMapChange =() => {
        this.setState({isGoogleMapsLoad: true})
    }

    render() {
        return (
            <>
                <div className={style.contacts}>
                    {this.state.popupIsOpen && <Feedback handle={this.popupHandle} />}
                    <Breadcrumbs current='КОНТАКТИ'/>
                    <div className={style.contactsHead}>
                        КОНТАКТИ
                    </div>
                    <div className={style.contactsInfo}>
                        <div className={style.infoLeft}>
                            <div className={style.infoTitle}>
                                Офіс продажу:
                            </div>
                            <div className={style.infoLine} />
                            <div className={style.infoAddress}>
                                09100<br />
                                <a target='_blank' href='https://maps.google.com/maps?q=Дегтярівська, 17-19'>м. Київ, вул. Круглоуніверситетська, 5-7</a>
                            </div>
                            <div className={style.infoSchedule}>
                                Пн-Пт: 10:00 - 19:00<br />
                                Сб-Нд: 10:00 - 18:00
                            </div>
                        </div>
                        <div className={style.infoRight}>
                            <div className={style.infoTitle}>
                                Зв'язок з нами:
                            </div>
                            <div className={style.infoLine} />
                            <div className={style.infoEmailPhone}>
                                <a href="mailto:krauss@gmail.com">krauss@gmail.com</a><br />
                                <a href='tel:+38 (044) 299 56 62'>096 453 45 64</a>
                            </div>
                            <div className={style.infoCallButton} onClick={() => this.popupOpen()}>
                                Замовити дзвінок
                            </div>
                            <div className={style.infoSocial}>
                                <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className={style.socialFacebook}>
                                    <div className={style.facebookIcon}/>
                                </a>
                                <a target='_blank' href='https://www.instagram.com/krauss.gallery' className={style.socialInstagram}>
                                    <div className={style.instagramIcon}/>
                                </a>
                                <a target='_blank' href='https://t.me/kreator_bud' className={style.socialTelegram}>
                                    <div className={style.telegramIcon}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.maps}>
                    {this.state.isGoogleMapsLoad ? <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyA0iOxpzr8dGr-6kZ5p-daTSNPub-6Tpt4'}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    </GoogleMapReact> : <div className={style.noMapsImage} onClick={()=> this.onMapChange()}/>}
                </div>
                <div className={style.advice}>
                    <div className={style.adviceLeft}>
                        <div className={style.leftTitle}>
                        Записатись<br />
                            на консультацію
                        </div>
                        <div className={style.leftText}>
                        Якщо у вас є питання - заповніть форму та<br />
                            отримайте відповідь протягом робочого дня
                        </div>
                    </div>
                    <form className={style.adviceRight}>
                        <div className={style.rightInputs}>
                            <input type='text' placeholder="Ім'я" className={style.inputName} required/>
                            <div className={style.rightShortInputs}>
                                <input type='tel' placeholder="Телефон" className={style.inputPhone} required/>
                                <input type='email' placeholder="Email" className={style.inputEmail} required/>
                            </div>
                            <textarea placeholder="Повідомлення" className={style.rightMessage}/>
                        </div>
                        <button className={style.rightButton}>Відправити</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Contacts