import React from 'react'

import Header from '../components/Header/Header.jsx'
import BannerAndMenu from '../components/BannerAndMenu/BannerAndMenu.jsx'
import Slider from '../components/Slider/Slider.jsx'
import Title from '../components/Title/Title.jsx'
import Menu from '../components/Menu/Menu.jsx'
import New from '../components/New/New.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
    return (
        <div>
            <Header />
            <BannerAndMenu />
            <Slider />
            <Title title="MACVIC PRO" />
            <Menu />
            <Title title="TIN TỨC" />
            <New />
            <Footer />
        </div>
    )
}
