import React from 'react'
import { BsYoutube, BsFillReplyFill, BsExclamationCircle } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import './Footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <section className='footer-contact'>
                <div className='container'>
                    <ul className='footer-contact__list'>
                        <li>FLYCAMVN</li>
                        <li>Chi nhánh HN: <span>Số 5 ngõ 100 Dịch Vọng Hậu, Cầu Giấy, HN</span></li>
                        <li>Hotline 1:  0869459618</li>
                        <li>Hotline 1:  0889526688</li>
                        <li>Chi nhánh TP.HCM:  <span>Số 32 Đường 12, Phường An Phú, Quận 2 , TP.HCM</span> Hotline 1:  0941288289   Hotline 2: 0906224689</li>
                        <li><span>Email: flycamvn.com@gmail.com</span></li>
                    </ul>
                </div>

            </section>
            <section className='footer-social'>
                <div className='container footer-social__item'>
                    <div className='footer-social__yt'>
                        <h2>Youtube</h2>
                        <div className='footer-social__yt-container'>
                            <a className='footer-social__yt-container-img'>
                                <img src="https://flycamvn.com/wp-content/uploads/2016/11/lg.png" />
                            </a>
                            <div className='footer-social__yt-container-item'>
                                <a href='#'>
                                    <h3>FLYCAMVN</h3>
                                </a>
                                <span className='footer-social__yt-container-item-link'><BsYoutube />YouTube</span>
                                <span className='footer-social__yt-container-item-sub'>999+</span>
                            </div>
                        </div>
                    </div>
                    <div className='footer-social__logo'>
                        <img src="https://flycamvn.com/wp-content/uploads/2016/11/lg.png" />
                    </div>
                    <div className='footer-social__fb'>
                        <div className='footer-social__fb-head'>
                            <div className='footer-social__fb-head-logo'>
                                <img src="https://flycamvn.com/wp-content/uploads/2016/11/lg.png" />
                            </div>
                            <span>Flycamvn<p>22.410 lượt thích</p></span>
                        </div>

                        <div className='footer-social__fb-footer'>
                            <span className='footer-social__fb-footer-fb'><AiFillFacebook />Thích Trang</span>
                            <span className='footer-social__fb-footer-share'><BsFillReplyFill />Chia sẻ</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-license'>
                <div className='container'>
                    <p>CHÍNH SÁCH CHUNG - CHÍNH SÁCH BẢO MẬT - CHÍNH SÁCH BẢO HÀNH</p>
                    <img src='https://flycamvn.com/wp-content/uploads/2018/06/da-thong-bao-1024x388.png' />
                </div>
            </section>
            <section className='footer-end'>
                <div className='container'>
                    <p><BsExclamationCircle/>Copyright 2014</p>
                </div>
            </section>
        </div>
    )
}
