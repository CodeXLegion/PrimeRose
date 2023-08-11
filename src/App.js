import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Hones/Home';
import Contact from './components/contact/contact';
import Product from './components/top_sales/Product';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
