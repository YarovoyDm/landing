import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './Contacts.module.scss'

class Contacts extends React.Component {
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
                                <div className={style.socialFacebook}/>
                                <div className={style.socialInstagram}/>
                                <div className={style.socialTelegram}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.maps}>
                    1
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