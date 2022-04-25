import React, { useState, useEffect } from 'react';
import './Products.css'

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const API = 'https://shoppingapiacme.herokuapp.com/shopping'
    const data = await fetch(API)
    const productList = await data.json()
    setProducts(productList)
  }

  const handleClick = () => {
    alert('Producto Agregado')
  }

  return <div className='productList'>
    {products.map(item => (
        <div className="product" key={item.id} >
          <div className="productDetails">
            <h3 className="productName">{item.item}</h3>
            <p className='productType'>{item.brand}</p>
            <p className='productPrice'>{item.price}</p>
            <button className='addToCartButton' onClick={handleClick}>Añadir al carro</button>
          </div>
          <figure>
            <img src={item.image} alt="productImage" />
          </figure>
        </div> 
    ))}
  </div>;
}

export default Products;
