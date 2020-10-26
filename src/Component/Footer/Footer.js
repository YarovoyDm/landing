import React from 'react'
import Logo from '../Logo/Logo'
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_top'>
                    <Logo />
                    <div>
                        <div className='footer_contact-title'>
                            Контакти
                        </div>
                        <div className='footer_contact-info'>
                            <div className='footer_contact-text'>
                                Офіс продажу: <br />
                                м. Київ, вул. Круглоуніверситетська, 5-7 <br />
                                <div className='footer_contact-map'>Дивитись на карті</div>
                                <div className='socialIcons_wrapper'>
                                    <div className='social-facebook' />
                                    <div className='social-instagram' />
                                    <div className='social-telegram' />
                                </div>
                            </div>
                            <div className='footer_contact-text'>
                                krauss@gmail.com <br />
                                +38 096 456 76 45
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