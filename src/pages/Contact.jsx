import React from 'react'

import Header from '../components/Header/Header.jsx'
import BannerAndMenu from '../components/BannerAndMenu/BannerAndMenu.jsx'
import Footer from '../components/Footer/Footer.jsx'

import './Contact.scss'

export default function Contact() {
    return (
        <>
            <Header />
            <BannerAndMenu />
            <div className='contact'>
                <div className='container d-flex'>
                    <div className='contact-text'>
                        <h4>Liên hệ với chúng tôi</h4>
                        <h5>FlycamVN</h5>
                        <ul>
                            <li><span>Chi nhánh HN: </span>Số 5 ngõ 100 Dịch Vọng Hậu, Q.Cầu Giấy, HN</li>
                            <li><span>Hotline: 0869459618</span></li>
                            <br />
                            <li><span>Chi nhánh TP.HCM: </span>Số 32 Đường 12, Phường An Phú, Quận 2, TP.HCM, Phường An Phú, Quận 2 , TP.HCM</li>
                            <li><span>Hotline 1: 0941.288.289</span></li>
                            <li><span>Hotline 2: 090.622.4689</span></li>
                            <li><span>Email:</span> flycamvn.com@gmail.com</li>
                        </ul>
                    </div>
                    <div className='contact-imput'>
                        <input placeholder='Họ và tên...' />
                        <input placeholder='Địa chỉ email...' />
                        <input placeholder='Số điện thoại...' />
                        <textarea name="Text1" cols="40" rows="5" placeholder='Nội dung liên hệ...'></textarea>
                        <button>GỬI LIÊN HỆ</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
