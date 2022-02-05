import React, { useState, useEffect } from 'react';

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

  return <div>
    <ul>
      {
        products.map(item => (
          <li key={item.id} >{item.brand}</li>
        ))
      }
    </ul>
  </div>;
};

export default ProductList;
