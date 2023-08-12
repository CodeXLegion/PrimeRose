import '../nav_bar/nav.css'
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <>
             <nav className="nav">
      <i className="uil uil-bars navOpenBtn"></i>
      <a className="logo">GREENWARE</a>

      <ul className="nav-links">
        <i className="uil uil-times navCloseBtn"></i>
        <li><Link to={'/'}><a>Home</a></Link></li>
        <li><Link to={'/shop'}><a>Shop</a></Link></li>
        <li><Link to={'/about'}><a>About us</a></Link></li>
        <li><a>FAQ</a></li>
        <li className='contact'><Link to={'/contact'}><a>Contact Us</a></Link></li>
      </ul>

      <i className="uil uil-search search-icon" id="searchIcon"></i>
      <div className="search-box">
        <i className="uil uil-search search-icon"></i>
        <input type="text" placeholder="Search here..." />
      </div>
      <div className="button">
        <button className="signin-button">Sign In</button>
        <button className="sign-button">Join</button>
      </div>
        </nav>
        </>
    )
}

export default NavBar;