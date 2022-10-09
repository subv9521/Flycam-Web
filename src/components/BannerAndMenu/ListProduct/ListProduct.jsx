import React from 'react'
import './ListProduct.scss'
import { BiChevronRight } from "react-icons/bi";


export default function ListProduct() {
  const listProductItems = [
    'DJI Mavic',
    'Phantom 4',
    'Ispire',
    'OSMO',
    'Phụ kiện Flycam và DJI Phantom',
    'Flycam giá rẻ và tầm trung',
    'Tay cầm chống rung, Gimbal',
    'Robot hút bụi lau nhà'
  ]

  return (
    <ul className='list-product'>
      {
        listProductItems.map((item, i) => {
          if(i <= 3 || i == 6) {
            return <li key={i} className='list-product-item'>
              <img src='https://flycamvn.com/wp-content/uploads/2016/11/lg.png' />
              <span className='list-product-item__name'>{item}</span>
              <BiChevronRight className='icon-arrow-right' />
            </li>
          } else {
            return <li key={i} className='list-product-item'>
              <img src='https://flycamvn.com/wp-content/uploads/2016/11/lg.png' />
              <span className='list-product-item__name'>{item}</span>
            </li>
          }
        })
      }
    </ul>
  )
}
