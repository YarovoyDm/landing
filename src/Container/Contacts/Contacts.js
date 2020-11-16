import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import GoogleMapReact from 'google-map-react';

import style from './Contacts.module.scss'

class Contacts extends React.Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <>
                <div className={style.contacts}>
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
                                м. Київ, вул. Круглоуніверситетська, 5-7
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
                                krauss@gmail.com<br />
                                096 453 45 64
                            </div>
                            <div className={style.infoCallButton}>
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
                {/* <div className={style.maps}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBPgn79D6ksltA7YnaVr-Cr3zp1Kxe9Xsg'}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                    </GoogleMapReact>
                </div> */}
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
                    <div className={style.adviceRight}>
                        <div className={style.rightInputs}>
                            <input placeholder="Ім'я" className={style.inputName}/>
                            <div className={style.rightShortInputs}>
                                <input placeholder="Телефон" className={style.inputPhone}/>
                                <input placeholder="Email" className={style.inputEmail}/>
                            </div>
                            <textarea placeholder="Повідомлення" className={style.rightMessage}/>
                        </div>
                        <div className={style.rightButton}>Відправити</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contacts