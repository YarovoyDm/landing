import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'


class Header extends React.Component {

    state={
        isHeaderMenuOpen: false
    }

    onMenuChange = () => {
        this.setState({ isHeaderMenuOpen: !this.state.isHeaderMenuOpen})
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
                        <div className='header_closeButton' onClick={() => this.onMenuChange()}>&#10005;</div>
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
                            <div className='menu-right-wrap'><div className='menu-right-facebook'/></div>
                            <div className='menu-right-wrap'><div className='menu-right-instagram'/></div>
                            <div className='menu-right-wrap'><div className='menu-right-telegram'/></div>
                        </div>
                    </div>
                </div>
                <Logo />
                <div className="header_info">
                    <div className="header_info-address">
                        <div className="header_info-location"/>Круглоуніверситетська, 5-7
                    </div>
                    <div className="header_info-phone">
                    <div className="header_info-phoneIcon"/>096 453 45 64
                    </div>
                    <div className="header_menu-button" onClick={() => this.onMenuChange()}>
                        1
                    </div>
                </div>
            </div>
        )
    }
}

export default Header