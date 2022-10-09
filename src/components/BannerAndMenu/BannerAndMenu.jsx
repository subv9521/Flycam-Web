import { BsSearch } from "react-icons/bs";
import { useState } from "react";

import ListProduct from './ListProduct/ListProduct.jsx'
import './BannerAndMenu.scss'


export default function BannerAndMenu() {
  // const menuProduct = document.querySelector('.list-product')
  // console.log(menuProduct);
  const [show, setShow] = useState(false)

  function toggleListProduct() {
    // menuProduct.classList.toggle('block-list');
    setShow(!show);
  }

  return (
    <section className='banner-and-menu'>
      <div className='container'>
        <div className='banner-top'>
          <img src="https://flycamvn.com/wp-content/uploads/2016/11/lg.png"></img>
          <img src="https://flycamvn.com/wp-content/uploads/2016/11/sl.png"></img>
        </div>
        <div className='menu-main'>
          <p className='menu-main__title'>DANH MỤC SẢN PHẨM</p>
          <div className='menu-main__list-products' onClick={toggleListProduct}>
            <p>&#9776;</p>
            {show && <ListProduct />}
          </div>
          <div className='menu-main__search'>
            <input className="menu-main__search-input" placeholder='Nhập từ khóa để tìm kiếm ...'/>
            <BsSearch className='menu-main__search-icon' />
          </div>
        </div>
      </div>
    </section>
  )

  
}
