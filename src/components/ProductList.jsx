import React, { useEffect, useState } from 'react'
import '../styles/ProductList.css'
import Product from '../components/Product.jsx'

const API = 'https://amiiboapi.com/api/amiibo/?amiiboSeries=0x06';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(API);
      const data = await response.json();

      console.log(data)

      // store the data into our books variable
      setProducts(data) ;
    }
  }, []);
  return (
    <div className='productsContainer'>
      <div className="products">
          <Product />
      </div>
    </div>
  )
}

export default Products
