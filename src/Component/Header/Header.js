import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import './Header.css'
import Feedback from '../Feedback/Feedback';


class Header extends React.Component {

    state = {
        isHeaderMenuOpen: false,
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

    onMenuLinkChange = () => {
        this.setState({ isHeaderMenuOpen: !this.state.isHeaderMenuOpen})
        document.body.style.overflow = 'visible'
        document.body.style.paddingRight = '0px'
    }

    onMenuChange = () => {
        const isMobile = window.screen.width <= 1024
        this.setState({ isHeaderMenuOpen: !this.state.isHeaderMenuOpen },() => {
            this.state.isHeaderMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
            if(!isMobile){this.state.isHeaderMenuOpen ? document.body.style.paddingRight = '17px' : document.body.style.paddingRight = '0px'}
        })
    }

    render() {
        return (
            <div className='header'>
                {this.state.popupIsOpen && <Feedback handle={this.popupHandle} />}
                <div className={this.state.isHeaderMenuOpen ? 'header_menu' : 'header_menu menu-hide'}>
                    <div className='header_menu_left'>
                        <div className='footer_sitemap-info'>
                            <div className='footer_sitemap-left'>
                                <Link onClick={() => this.onMenuLinkChange()} to='/about-the-complex' className='footer_sitemap-item'>Про комплекс</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/house' className='footer_sitemap-item'>Вибір планування</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/infrastructure' className='footer_sitemap-item'>Інфраструктура</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/construction-progress' className='footer_sitemap-item'>Хід будивництва</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/gallery' className='footer_sitemap-item'>Галерея</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/about-developer' className='footer_sitemap-item'>Забудовник</Link>
                            </div>
                            <div className='footer_sitemap-right'>
                                <Link onClick={() => this.onMenuLinkChange()} to='/parking' className='footer_sitemap-item'>Паркінг</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/commercial-property' className='footer_sitemap-item'>Комерційна нерухомість</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/documents' className='footer_sitemap-item'>Документи</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/terms-of-purchase' className='footer_sitemap-item'>Умови придбання</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/news' className='footer_sitemap-item'>Новини та акції</Link>
                                <Link onClick={() => this.onMenuLinkChange()} to='/contacts' className='footer_sitemap-item'>Контакти</Link>
                            </div>
                        </div>
                    </div>
                    <div className='header_menu_right'>
                        <div className='header_closeButton' onClick={() => this.onMenuChange()}></div>
                        <div className='menu-right-title'>Офіс продажу:</div>
                        <div className='menu-right-text'>
                            09100 м. Київ,<br />
                            <a target='_blank' href='https://maps.google.com/maps?q=Дегтярівська, 17-19'>м. Київ, вул. Круглоуніверситетська,<br /> 5-7</a><br /><br />
                            Пн-Пт: 10:00 - 19:00<br />
                            Сб-Нд: 10:00 - 18:00
                        </div>
                        <div className='menu-right-title'>Зв'язок з нами:</div>
                        <div className='menu-right-text'>
                            <a href="mailto:krauss@gmail.com">krauss@gmail.com</a><br />
                            <a href='tel:+38 (044) 299 56 62'>096 453 45 64</a>
                        </div>
                        <div className='menu-right-button' onClick={() => this.popupOpen()}>Замовити дзвінок</div>
                        <div className='menu-right-icons'>
                            <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className='menu-right-wrap'><div className='menu-right-facebook' /></a>
                            <a target='_blank' href='https://www.instagram.com/krauss.gallery' className='menu-right-wrap'><div className='menu-right-instagram' /></a>
                            <a target='_blank' href='https://t.me/kreator_bud' className='menu-right-wrap'><div className='menu-right-telegram' /></a>
                        </div>
                    </div>
                    <div className='header_menu_bottomMobile'>
                        <div className='header_mobileContactTop'>
                            <div className='menu-right-title'>Офіс продажу:</div>
                            <div className='menu-right-text'>
                                м. Київ, вул. Дегтярівська, будинок 17-19
                        </div>
                        </div>
                        <div className='header_mobileContactBot'>
                            <div className='header_contactBot-left'>
                                <a href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7' className='footer_contact-map'>Дивитись на карті</a>
                                <div className='menu-right-text'>
                                    <a href="mailto:krauss@gmail.com">krauss@gmail.com</a><br />
                                    <a href='tel:+38 (044) 299 56 62'>096 453 45 64</a>
                                </div>
                            </div>
                            <div>
                                <div className='menu-right-icons'>
                                    <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className='menu-right-wrap'><div className='menu-right-facebook' /></a>
                                    <a target='_blank' href='https://www.instagram.com/krauss.gallery' className='menu-right-wrap'><div className='menu-right-instagram' /></a>
                                    <a target='_blank' href='https://t.me/kreator_bud' className='menu-right-wrap'><div className='menu-right-telegram' /></a>
                                </div>
                                <div className='menu-right-button' onClick={() => this.popupOpen()}>Замовити дзвінок</div>
                            </div>
                        </div>
                        <div className='header_closeButton' onClick={() => this.onMenuChange()}></div>
                    </div>
                </div>
                <Logo />
                <div className="header_info">
                    <div className='header_infoMapWrapper'>
                        <a target='_blank' href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7' className="header_info-location" />
                        <a target='_blank' href='https://maps.google.com/maps?q=Круглоуніверситетська, 5-7' className="header_info-address">
                            Круглоуніверситетська, 5-7
                        </a>
                    </div>
                    <div className='header_info-phoneWrapper'>
                        <div className="header_info-phoneIcon" />
                        <a href='tel:044 294 81 65' className={cn("header_info-phone "  + "ad_saver_phone")}>
                            044 294 81 65
                        </a>
                    </div>
                    
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