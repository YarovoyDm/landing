import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
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
                                <a target='_blank' href='https://maps.google.com/maps?q=Дегтярівська, 17-19' className='footer_contact-map'>Дивитись на карті</a>
                                <div className='socialIcons_wrapper'>
                                    <a target='_blank' href='https://www.facebook.com/%D0%96%D0%9A-Krauss-Gallery-107828174465021/' className='social-facebook' />
                                    <a target='_blank' href='https://www.instagram.com/krauss.gallery' className='social-instagram' />
                                    <a target='_blank' href='https://t.me/kreator_bud' className='social-telegram' />
                                </div>
                            </div>
                            <div className='footer_contact-text'>
                                sales_manager@creatorcity.com.ua <br />
                                <a href='tel:+38 (044) 299 56 62' className={cn('footer_contact-number ' + 'ad_saver_phone')}>+38 (044) 299 56 62</a>
                                <div className='footer_contact-call'>Замовити дзвінок</div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer_sitemap-title'>
                            Карта сайту
                        </div>
                        <div className='footer_sitemap-info'>
                            <div className='footer_sitemap-left'>
                                <div className='footer_sitemap-item'>Про комплекс</div>
                                <div className='footer_sitemap-item'>Вибір планування</div>
                                <div to='/infrastructure' className='footer_sitemap-item'>Інфраструктура</div>{/* */}
                                <div to='/construction-progress' className='footer_sitemap-item'>Хід будивництва</div>{/* */}
                                <div className='footer_sitemap-item'>Галерея</div>
                                <div className='footer_sitemap-item'>Забудовник</div>
                            </div>
                            <div className='footer_sitemap-right'>
                                <div to='/parking' className='footer_sitemap-item'>Паркінг</div>{/* */}
                                <div to='/commercial-property' className='footer_sitemap-item'>Комерційна нерухомість</div>{/* */}
                                <div to='/documents' className='footer_sitemap-item'>Документи</div>{/* */}
                                <div to='/terms-of-purchase' className='footer_sitemap-item'>Умови придбання</div>{/* */}
                                <div to='/news'className='footer_sitemap-item'>Новини та акції</div>{/* */}
                                <div to='/contacts' className='footer_sitemap-item'>Контакти</div>{/* */}
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