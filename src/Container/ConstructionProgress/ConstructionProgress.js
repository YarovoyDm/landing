import React from 'react'
import ReactPlayer from 'react-player'
import style from './ConstructionProgress.module.scss'

import constructionVideo from '../../Images/constractionStatus.jpg'
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs'
import { Link } from 'react-router-dom'

class ConstructionProgress extends React.Component {

    state={
        camera: 1,
        showMore: false
    }

    onCameraChange = (cameraType) => {
        this.setState({ camera: cameraType})
    }
    render() {
        return (
            <div className={style.constructionProgress}>
                <Breadcrumbs current='ХІД БУДІВНИЦТВА'/>
                <div className={style.top}>
                    <div className={style.topLeft}>
                        <div className={style.leftTitle}>ХІД БУДІВНИЦТВА</div>
                        <div className={style.leftText}>
                            Задавати тон і ритм, але зливатися з музикою
                            архітектури. Жити у серці мегаполісу, і бачити
                            землю до самого горизонту.
                        </div>
                        <div className={style.leftButtons}>
                            <div className={style.cameraButton} onClick={() => this.onCameraChange(1)}>Камера 1</div>
                            <div className={style.cameraButton} onClick={() => this.onCameraChange(2)}>Камера 2</div>
                        </div>
                    </div>
                    <div className={style.video}>
                        <ReactPlayer className={style.player} url={this.state.camera === 1 ? 'https://www.youtube.com/watch?v=ysz5S6PUM-U' : 'https://www.youtube.com/watch?v=saQBW9Xs5eI'} />
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.otherWrapper}>
                        <Link to='/construction-progress' className={style.item}>
                            <div className={style.otherImage}/>
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за серпень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                        <Link to='/construction-progress'  className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за липень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                        <Link to='/construction-progress'  className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за червень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                    </div>
                    {this.state.showMore && <div className={style.otherWrapper}>
                        <Link to='/construction-progress' className={style.item}>
                            <div className={style.otherImage}/>
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за серпень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                        <Link to='/construction-progress'  className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за липень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                        <Link to='/construction-progress'  className={style.item}>
                            <div className={style.otherImage} />
                            <div className={style.date}>20/08/2020</div>
                            <div className={style.otherTitle}>
                                Хід будівництва за червень
                            </div>
                            <div className={style.arrow} />
                        </Link>
                    </div>}
                    {!this.state.showMore && <div className={style.moreButton} onClick={() => this.setState({showMore: true})}>Показати більше</div>}
                </div>
            </div>
        )
    }
}

export default ConstructionProgress