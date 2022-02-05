import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css'

const ProductList = () => {

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

  return <div className='productList'>
    {products.map(item => (
        <div className="product">
          <div className="productDetails">
            <h3 className="productName">{item.item}</h3>
            <p className='productType'>{item.brand}</p>
            <p className='productPrice'>{item.price}</p>
            <button className='addToCartButton'>Añadir al carro</button>
          </div>
          <figure>
            <img src={item.image} alt="productImage" />
          </figure>
        </div>
    ))}
  </div>;
};

export default ProductList;
