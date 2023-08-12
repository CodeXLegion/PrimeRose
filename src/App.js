import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Hones/Home';
import Contact from './components/contact/contact';
import Product from './components/top_sales/Product';
import Sign from './components/signUp/Sign';
import Faq from './components/faq/Faq';
import SignUp from './components/signUp/Sign';
import Cart from './components/cart/Cart';

function App() {
  return (
   
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            {/* <Route path='/signup' element={<Sign/>}></Route> */}
            <Route path='/faq' element={<Faq/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
  );
}

export default App;
