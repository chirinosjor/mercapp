import './App.css';
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Categories from './components/Categories.jsx'
import Products from './components/Products.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Categories />
      <Products />
    </div>
  );
}

export default App;
