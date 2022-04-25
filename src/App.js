import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Products from './components/Products'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
}


export default App;
