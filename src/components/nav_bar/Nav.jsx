import '../nav_bar/nav.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Home from '../Hones/Home';
import Sign from '../signUp/Sign';
function NavBar() {
  const [opensignup, setopensign] = useState(false)
    return(
        <>
             <nav className="nav">
            <div className="logo">
            <i className="uil uil-bars navOpenBtn"></i>
      <a className="logo">GREENWARE</a>
            </div>

      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn"></i>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/product'}><a>Shop</a></Link></li>
        <li><a>About</a></li>
        <li><Link to={'/faq'}><a>FAQ</a></Link></li>
        <li><Link to={'/contact'}><a>Contact Us</a></Link></li>
      </ul>

     <form action="">
     <i className="uil uil-search search-icon" id="searchIcon"></i>
      <div className="search-box">
        <i className="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
     </form>
      <div className="button">
        <button className="signin-button"><Link onClick={()=> setopensign(true)}>Sign In</Link></button>
        <button className="sign-button">Join</button>
       <Link to={'/cart'}> <a href=""><i class="fa-solid fa-cart-shopping"></i></a></Link>
      </div>
        </nav>
        <Sign open={opensignup} onclosesign={()=> setopensign(false)}/>
        </>
        
    )
}

export default NavBar;