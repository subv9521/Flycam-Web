import { Link } from 'react-router-dom'


import { Nav, NavItem, NavLink } from 'reactstrap'
import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <header className='header'>
            <div className='container header-container'>
                <Nav className='header-nav'>
                    <NavItem className='header-nav__item'>
                        <Link className='header-nav__item-link' to="/">Trang chủ</Link>
                    </NavItem>
                    <NavItem className='header-nav__item'>
                        <Link className='header-nav__item-link' to="/introduction">Giới Thiệu</Link>
                    </NavItem>
                    <NavItem className='header-nav__item'>
                        <Link className='header-nav__item-link' to="/news">Tin Tức</Link>
                    </NavItem>
                    <NavItem className='header-nav__item'>
                        <Link className='header-nav__item-link' to="/contact">Liên Hệ</Link>
                    </NavItem>
                </Nav>
                <div className='header-hotline'>
                    <div className='header-hotline__img'>
                        <img src='https://flycamvn.com/wp-content/themes/thietkewebwordpress/img/telephone1.png'></img> 
                    </div>
                    <ul className='header-hotline__list'>
                        <li className='header-hotline__list-title'>ĐIỆN THOẠI ĐẶT HÀNG</li> 
                        <li className='header-hotline__list-number'>HN: 086.945.9618</li> 
                        <li className='header-hotline__list-number'>HCM: 094.128.8289</li>
                        <li className='header-hotline__list-footer'>
                            Hỗ trợ trực tuyến<br/>
                            <span className='header-hotline__list-footer-img img-mess'><img src='https://flycamvn.com/wp-content/themes/thietkewebwordpress/img/face.jpg'/></span>
                            <span className='header-hotline__list-footer-img img-sky'><img src='https://flycamvn.com/wp-content/themes/thietkewebwordpress/img/skype.png'/></span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
