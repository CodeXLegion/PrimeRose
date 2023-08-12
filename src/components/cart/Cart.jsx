import '../cart/cart.css';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/Nav';
function Cart() {
    return(
        <>
        <NavBar/>
        <div id="cart">
            <div className="cart_sec">
                <div className="cart_T">
                    <div className="cancel pad"><i class="fa-solid fa-xmark"></i></div>
                    <div className="txt">
                        <p>SHOPING CART</p>
                    </div>
                    <div className="num pad"><p>0</p></div>
                </div>
                <div className="carts">
                    <div className="cart_items"></div>
                    <div className="cart_message">
                        <h1>Your Shopping Bag Is Empty</h1>
                        <Link to={'/product'}><button>GO TO SHOP</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Cart;