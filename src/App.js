import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Hones/Home';
import Contact from './components/contact/contact';
import Product from './components/top_sales/Product';
import Sign from './components/signUp/Sign';
import Faq from './components/faq/Faq';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            {/* <Route path='/signup' element={<Sign/>}></Route> */}
            <Route path='/faq' element={<Faq/>}></Route>
      </Routes>
      </div>
  );
}

export default App;
