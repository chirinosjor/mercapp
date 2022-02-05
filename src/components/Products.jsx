import React, { useState, useEffect } from 'react';
import '../styles/Products.css'

function Products() {

  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

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
    <div class="count">
        <h3>Count:</h3>
        <h1>{count}</h1>
    </div>
    {products.map(item => (
        <div className="product" key={item.id} >
          <div className="productDetails">
            <h3 className="productName">{item.item}</h3>
            <p className='productType'>{item.brand}</p>
            <p className='productPrice'>{item.price}</p>
            <button className='addToCartButton' onClick={incrementCount}>Añadir al carro</button>
          </div>
          <figure>
            <img src={item.image} alt="productImage" />
          </figure>
        </div> 
    ))}
  </div>;
}

export default Products;
