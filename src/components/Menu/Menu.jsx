import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

import Product from './Product/Product.jsx'

import './Menu.scss'

  
export default function Menu() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/djiMavic')
    .then(function (response) {
      setProducts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  return (
    <section className='menu-list'>
      <div className='container'>
        {
          products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </section>
  )
}
