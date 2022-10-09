import React from 'react'
import './New.scss'


const news = [
    {
        img: "https://flycamvn.com/wp-content/uploads/2022/05/dji-mini-3-prezzo-caratteristiche-300x176.jpg",
        title: "So sánh Mavic Mini 2 và DJI Mini 3 Pro",
        describe: "DJI Mini 3 Pro vừa ra mắt khiến nhiều người dùng ngay lập tức đặt ra câu hỏi: Nên mua Mini 3 Pro hay Mavic..."
    },
    {
        img: "https://flycamvn.com/wp-content/uploads/2022/05/dji-mini-3-prezzo-caratteristiche-300x176.jpg",
        title: "So sánh Mavic Mini 2 và DJI Mini 3 Pro",
        describe: "DJI Mini 3 Pro vừa ra mắt khiến nhiều người dùng ngay lập tức đặt ra câu hỏi: Nên mua Mini 3 Pro hay Mavic..."
    },
    {
        img: "https://flycamvn.com/wp-content/uploads/2022/05/dji-mini-3-prezzo-caratteristiche-300x176.jpg",
        title: "So sánh Mavic Mini 2 và DJI Mini 3 Pro",
        describe: "DJI Mini 3 Pro vừa ra mắt khiến nhiều người dùng ngay lập tức đặt ra câu hỏi: Nên mua Mini 3 Pro hay Mavic..."
    },
    {
        img: "https://flycamvn.com/wp-content/uploads/2022/05/dji-mini-3-prezzo-caratteristiche-300x176.jpg",
        title: "So sánh Mavic Mini 2 và DJI Mini 3 Pro",
        describe: "DJI Mini 3 Pro vừa ra mắt khiến nhiều người dùng ngay lập tức đặt ra câu hỏi: Nên mua Mini 3 Pro hay Mavic..."
    },
]

export default function New() {

    return (
        <div className='container'>
            <div className='new-item-wrap'>
                {
                    news.map(item => {
                        return (
                            <div className='new-item'>
                                <div className='new-item__img'>
                                    <img src={item.img} />
                                </div>
                                <div className='new-item__desc'>
                                    <h3>
                                        <a>{item.title}</a>
                                    </h3>
                                    <p>{item.describe}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>          
        </div>
    )
}


