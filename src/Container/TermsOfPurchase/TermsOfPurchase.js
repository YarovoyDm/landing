import React from 'react'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import style from './TermsOfPurchase.module.scss'

class TermsOfPurchase extends React.Component {
    render() {
        return (
            <div className={style.terms}>
                <Breadcrumbs current='УМОВИ ПРИДБАННЯ'/>
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
            </div>
        )
    }
}

export default TermsOfPurchase