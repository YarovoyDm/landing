import React from 'react'
import {Link} from 'react-router-dom'
import style from './Documents.module.scss'

import docImage from '../../Images/infrastructureLanding.jpg'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'

class Documents extends React.Component {
    render() {
        return (
            <div className={style.documents}>
                <Breadcrumbs current='ДОКУМЕНТИ'/>
                <div className={style.docImage} />
                <div className={style.infoBlock}> 
                    <div className={style.title}>
                        ДОКУМЕНТИ
                    </div>
                    <div className={style.docs}>
                        <div className={style.docItem}>
                            <div className={style.itemWrapper}>
                                <div className={style.docIcon} />
                                <div className={style.docText}>
                                    Ліцензія &#8470; 2013050941 (наказ &#8470; 28-Л) від 16.05.2018 видана
                                    державною архітектурно-будівельною інспекцією України
                                </div>
                            </div>
                        </div>
                        <div className={style.docItem}>
                            <div className={style.itemWrapper}>
                                <div className={style.docIcon} />
                                <div className={style.docText}>
                                    Ліцензія &#8470; 2013050941 (наказ &#8470; 28-Л) від 16.05.2018 видана
                                    державною архітектурно-будівельною інспекцією України
                                </div>
                            </div>
                        </div>
                        <div className={style.docItem}>
                            <div className={style.itemWrapper}></div>
                                <div className={style.docIcon} />
                                <div className={style.docText}>
                                    Ліцензія Арсан-буд від 14.11.18
                                </div>
                            </div>
                        <div className={style.docItem}>
                            <div className={style.itemWrapper}>
                                <div className={style.docIcon} />
                                <div className={style.docText}>
                                    Ліцензія &#8470; 2013050941 (наказ &#8470; 28-Л) від 16.05.2018 видана
                                    державною архітектурно-будівельною інспекцією України
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Documents