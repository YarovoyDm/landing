import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './TermsOfPurchase.module.scss'

class TermsOfPurchase extends React.Component {
    render() {
        return (
            <>
                <div className={style.terms}>
                    <Breadcrumbs current='УМОВИ ПРИДБАННЯ' />
                    <div className={style.termsImage} />
                    <div className={style.termsTextWrapper}>
                        <div className={style.termsTitle}>
                            УМОВИ ПРИДБАННЯ
                        </div>
                        <div className={style.termsText}>
                            Стриманість та функціональність сучасної архітектури,
                            інноваційні інженерні рішення, безпрецедентні умови для
                            комфорту мешканців та найкраще розташування в центрі міста -
                            всі ці переваги органічно поєднуються у житловому комплексі Krauss.
                        </div>
                    </div>
                    <div className={style.feedbackNav}>
                        <div className={style.feedbackTab}>
                            Купівля квартири при 100% оплаті
                        </div>
                        <div className={style.feedbackTabMobile}>
                            Купівля при 100% оплаті
                        </div>
                        <div className={style.feedbackTabDisable}>
                            Купівля квартири у розстрочку
                        </div>
                        <div className={style.feedbackTabDisableMobile}>
                            Розстрочку
                        </div>
                    </div>
                </div>
                <div className={style.feedback}>
                    <div className={style.feedbackForm}>
                        <div className={style.feedbackLeft}>
                            <ul>
                                <li className={style.li}>Вартість квадратного метра запитуйте у відділі продажу</li>
                                <li className={style.li}>Термін здійснення платежу становить 5 банківських днів з дня
                                укладення договору
                                </li>
                                <li className={style.li}>Вартість квартири лишажтсья незмінною, крім випадків
                                зміни її площі за паспортом БТІ
                                </li>
                            </ul>
                            <div className={style.leftBot}>
                                <div className={style.leftBotTitle}>
                                    Введення в експуатацію:
                                </div>
                                <div className={style.leftBotText}>
                                    4 кв. 2022 році
                                </div>
                            </div>
                        </div>
                        <form className={style.feedbackRight}>
                            <div className={style.feedbackTitle}>Зворотній зв'язок</div>
                            <div className={style.rightInputs}>
                                <input type='text' required placeholder="Ім'я" className={style.inputName} />
                                <div className={style.rightShortInputs}>
                                    <input type='tel' required placeholder="Телефон" className={style.inputPhone} />
                                    <input type='email' required placeholder="Email" className={style.inputEmail} />
                                </div>
                                <textarea placeholder="Повідомлення" className={style.rightMessage} />
                            </div>
                            <button className={style.rightButton}>Відправити</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default TermsOfPurchase