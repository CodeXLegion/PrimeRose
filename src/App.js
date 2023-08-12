import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Hones/Home';
import Contact from './components/contact/contact';
import Product from './components/top_sales/Product';
import Faq from './components/faq/Faq';
import Cart from './components/cart/Cart';
import Shop from './components/shop/Shop';
import About from './components/about/about'

function App() {
  return (
   
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            {/* <Route path='/signup' element={<Sign/>}></Route> */}
            <Route path='/faq' element={<Faq/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
      </Routes>
  );
}

export default App;
