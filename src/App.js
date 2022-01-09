import './App.css';
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
