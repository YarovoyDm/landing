import React from 'react'
import style from './Feedback.module.scss'

class Feedback extends React.Component {
    render() {
        return (
            <div className={style.apartamentPopup}>
                <div className={style.popupForm}>
                    <div className={style.popupCrossWrapper}>
                        <div className={style.popupCross} onClick={() => {
                            this.props.handle()
                        }}/> 
                    </div>
                    <div className={style.popupArrowWrapper}>
                        <div className={style.popupArrow} onClick={() => {
                            this.props.handle()
                        }}/> 
                    </div>
                    <form className={style.feedbackRight}>
                        <div className={style.feedbackTitle}>Залиште заявку</div>
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
        )
    }
}

export default Feedback