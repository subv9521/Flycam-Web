import React from 'react'
import './Product.scss'


export default function Product( {product} ) {
  return (
    <div className='product-item'>
      <div className='product-item__img'>
        <img src={product.img} />
      </div>
      <h2 className='product-item__name'><a>{product.name}</a></h2>
      <p className='product-item__old-price'>Giá: <span>{product.oldPrice}</span></p>
      <p className='product-item__new-price'>{product.newPrice} <span>{product.reducedPrice}</span></p>
    </div>
  )
}