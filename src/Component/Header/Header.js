import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'


class Header extends React.Component {

    state = {
        isHeaderMenuOpen: false
    }

    componentDidMount(){
        
    }

    onMenuChange = () => {
        // const isMobile = window.screen.width <= 1024
        // this.setState({ isHeaderMenuOpen: !this.state.isHeaderMenuOpen },() => {
        //     this.state.isHeaderMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
        //     if(!isMobile){this.state.isHeaderMenuOpen ? document.body.style.paddingRight = '17px' : document.body.style.paddingRight = '0px'}
        // })
    }

    render() {
        return (
            <div className='header'>
                <div className={this.state.isHeaderMenuOpen ? 'header_menu' : 'header_menu menu-hide'}>
                    <div className='header_menu_left'>
                        <div className='footer_sitemap-info'>
                            <div className='footer_sitemap-left'>
                                <div className='footer_sitemap-item'>Про комплекс</div>
                                <div className='footer_sitemap-item'>Вибір планування</div>
                                <div className='footer_sitemap-item'>Інфраструктура</div>
                                <div className='footer_sitemap-item'>Хід будивництва</div>
                                <div className='footer_sitemap-item'>Галерея</div>
                                <div className='footer_sitemap-item'>Забудовник</div>
                            </div>
                            <div className='footer_sitemap-right'>
                                <div className='footer_sitemap-item'>Паркінг</div>
                                <div className='footer_sitemap-item'>Комерційна нерухомість</div>
                                <div className='footer_sitemap-item'>Документи</div>
                                <div className='footer_sitemap-item'>Умови придбання</div>
                                <div className='footer_sitemap-item'>Новини та акції</div>
                                <div className='footer_sitemap-item'>Контакти</div>
                            </div>
                        </div>
                    </div>
                    <div className='header_menu_right'>
                        <div className='header_closeButton' onClick={() => this.onMenuChange()}></div>
                        <div className='menu-right-title'>Офіс продажу:</div>
                        <div className='menu-right-text'>
                            09100 м. Київ,<br />
                            вул. Круглоуніверситетська,<br />
                            будинок 5-7<br /><br />
                            Пн-Пт: 10:00 - 19:00<br />
                            Сб-Нд: 10:00 - 18:00
                        </div>
                        <div className='menu-right-title'>Зв'язок з нами:</div>
                        <div className='menu-right-text'>
                            krauss@gmail.com<br />
                            096 453 45 64
                        </div>
                        <div className='menu-right-button'>Замовити дзвінок</div>
                        <div className='menu-right-icons'>
                            <div className='menu-right-wrap'><div className='menu-right-facebook' /></div>
                            <div className='menu-right-wrap'><div className='menu-right-instagram' /></div>
                            <div className='menu-right-wrap'><div className='menu-right-telegram' /></div>
                        </div>
                    </div>
                    <div className='header_menu_bottomMobile'>
                        <div className='header_mobileContactTop'>
                            <div className='menu-right-title'>Офіс продажу:</div>
                            <div className='menu-right-text'>
                                м. Київ, вул. Круглоуніверситетська, будинок 5-7
                        </div>
                        </div>
                        <div className='header_mobileContactBot'>
                            <div className='header_contactBot-left'>
                                <a href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7' className='footer_contact-map'>Дивитись на карті</a>
                                <div className='menu-right-text'>
                                    krauss@gmail.com<br />
                                    096 453 45 64
                                </div>
                            </div>
                            <div>
                                <div className='menu-right-icons'>
                                    <div className='menu-right-wrap'><div className='menu-right-facebook' /></div>
                                    <div className='menu-right-wrap'><div className='menu-right-instagram' /></div>
                                    <div className='menu-right-wrap'><div className='menu-right-telegram' /></div>
                                </div>
                                <div className='menu-right-button'>Замовити дзвінок</div>
                            </div>
                        </div>
                        <div className='header_closeButton' onClick={() => this.onMenuChange()}></div>
                    </div>
                </div>
                <Logo />
                <div className="header_info">
                    <a href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7' className="header_info-address">
                        <div className="header_info-location" />Круглоуніверситетська, 5-7
                    </a>
                    <a className="header_info-locationMobile" href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7'>
                        <div />
                    </a>
                    <a href='tel:096 453 45 64' className="header_info-phone">
                        <div className="header_info-phoneIcon" />096 453 45 64
                    </a>
                    <a className="header_info-phoneIconMobile"  href='tel:096 453 45 64'>
                        <div />
                    </a>
                    <div className="header_menu-button" onClick={() => this.onMenuChange()}>
                        <div className="header_menu-linesWrapper">
                            <div className="header_menu-line" />
                            <div className="header_menu-line" />
                            <div className="header_menu-shortLine" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header