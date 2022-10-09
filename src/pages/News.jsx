import React from 'react'

import Header from '../components/Header/Header.jsx'
import BannerAndMenu from '../components/BannerAndMenu/BannerAndMenu.jsx'
import Title from '../components/Title/Title.jsx'
import New from '../components/New/New.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function News() {
    return (
        <>
            <Header />
            <BannerAndMenu />
            <Title title="TIN TỨC" />
            <New />
            <Footer />
        </>
    )
}
