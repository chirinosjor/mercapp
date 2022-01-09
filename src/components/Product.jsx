import React from 'react'
import product1 from '../assets/product1.jpg'

const Product = () => {
  return (
    <div className="product">
      <div className="productDetails">
        <h3 className="productName">Producto1</h3>
        <p className='productDescription'>Descripción del producto 1</p>
        <p className='productPrice'>$5000</p>
        <button className='addToCartButton'>Añadir al carro</button>
      </div>
      <figure>
        <img src={product1} alt="productImage" />
      </figure>
    </div>         
  )
}

export default Product
