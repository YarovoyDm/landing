import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import './Footer.css'
import Feedback from '../Feedback/Feedback';

class Footer extends React.Component {

    state = {
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
            document.body.style.overflow = 'hidden'
        })
    }

    render() {
        return (
            <div className='footer'>
                {this.state.popupIsOpen && <Feedback handle={this.popupHandle} />}
                <div className='footer_top'>
                    <Logo />
                    <div className='footer-left'>
                        <div className='footer_contact-title'>
                            Контакти
                        </div>
                        <div className='footer_contact-info'>
                            <div className='footer_contact-text'>
                                Офіс продажу: <br />
                                м. Київ, <br />вул. Дегтярівська, 17-19 <br />
                                <a target='_blank' href='https://maps.google.com/maps?q=ЖК+Creator+City' className='footer_contact-map'>Дивитись на карті</a>
                                <div className='socialIcons_wrapper'>
                                    <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className='social-facebook' />
                                    <a target='_blank' href='https://www.instagram.com/krauss.gallery' className='social-instagram' />
                                    <a target='_blank' href='https://t.me/kreator_bud' className='social-telegram' />
                                </div>
                            </div>
                            <div className='footer_contact-text'>
                                <a className='text-mail' href='mailto:sales_manager@creatorcity.com.ua'>sales_manager@creatorcity.com.ua</a> <br />
                                <a href='tel:+38 (044) 299 56 62' className={cn('footer_contact-number ' + 'ad_saver_phone')}>+38 (044) 299 56 62</a>
                                <div onClick={() => this.popupOpen()} className='footer_contact-call'>Замовити дзвінок</div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer_sitemap-title'>
                            Карта сайту
                        </div>
                        <div className='footer_sitemap-info'>
                            <div className='footer_sitemap-left'>
                                <Link to='/about-the-complex' className='footer_sitemap-item'>Про комплекс</Link>
                                <Link to='/house' className='footer_sitemap-item'>Вибір планування</Link>
                                <Link to='/infrastructure' className='footer_sitemap-item'>Інфраструктура</Link>
                                <Link to='/construction-progress' className='footer_sitemap-item'>Хід будивництва</Link>
                                <Link to='/gallery' className='footer_sitemap-item'>Галерея</Link>
                                <Link to='/about-developer' className='footer_sitemap-item'>Забудовник</Link>
                            </div>
                            <div className='footer_sitemap-right'>
                                <Link to='/parking' className='footer_sitemap-item'>Паркінг</Link>
                                <Link to='/commercial-property' className='footer_sitemap-item'>Комерційна нерухомість</Link>
                                <Link to='/documents' className='footer_sitemap-item'>Документи</Link>
                                <Link to='/terms-of-purchase' className='footer_sitemap-item'>Умови придбання</Link>
                                <Link to='/news' className='footer_sitemap-item'>Новини та акції</Link>
                                <Link to='/contacts' className='footer_sitemap-item'>Контакти</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div>
                        2020 Copyright information goes here
                    </div>
                    <div>
                        Designed by
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer