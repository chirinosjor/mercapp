import React from 'react'
import product1 from '../assets/product1.jpg'
import '../styles/Products.css'

const Products = () => {
  return (
    <div className='productsContainer'>
      <div className="category">
        <h2>Category</h2>
        <div className="products">
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
        </div>
      </div>
      <div className="category">
        <h2>Category</h2>
        <div className="products">
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
        </div>
      </div>
      <div className="category">
        <h2>Category</h2>
        <div className="products">
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
          <div className="product">
            <div className="productDetails">
              <h3 className="productName">Producto1</h3>
              <p className='procutDescription'>Descripción del producto 1</p>
              <p className='productPrice'>$5000</p>
              <button className='addToCartButton'>Añadir al carro</button>
            </div>
            <figure>
              <img src={product1} alt="productImage" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
