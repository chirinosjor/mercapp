import './App.css';
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import ProductList from './components/ProductList.jsx'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductList />
    </div>
  );
}

export default App;
