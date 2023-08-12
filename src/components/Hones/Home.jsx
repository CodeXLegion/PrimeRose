
import '../Hones/home.css';
import '../Hones/collect.css';
import { collection } from './data/collect';
import Product from '../top_sales/Product';
import NavBar from '../nav_bar/Nav';
import { Link } from 'react-router-dom';
function Home() {
    return(
        <>
        
        <NavBar/>
       <div id="hero">
        <div className="hero_sec">
            <div className="hero_txt">
                <h1>Join Us To Unveil Nature's <span>Artistry</span></h1>
                <p>In the language of flowers, every petal whispers a unique story, and every leaf holds the secrets of nature</p>
                <div className="btn">
                    <span>Join Us</span> 
                    <i class="fa-solid fa-angles-right"></i>
                </div>
            </div>
            <div className="hero_img">
                
            </div>
       </div>
       </div>
       <section className="collection">
        {collection.map(collect =>{
            return(
                <div className="con">
                    <div className="col_txt">
                        <p>{collect.title}</p>
                        <h1>{collect.head}</h1>
                       <Link to={'/shop'}><button>{collect.btn}</button></Link> 
                    </div>
                    <div className="col_img">
                    <img src={collect.img} alt="" />
                    </div>
                </div>
            )
        })}
       </section>
       <Product className="products"/>
       <section id='reason'>
            <div className="rea_sec"> 
            <div className="title">
                <h1>Reasons to shop with us</h1>
            </div>
            <ul>
                <li>
                    
                    <i class="fa-solid fa-truck"></i>
                    <div className="txt">
                        <p>Free Shipping</p>
                        <p>On in-stock items ordered</p>
                    </div>
                </li>
                <li>
                    
                <i class="fa-solid fa-coins"></i>
                    <div className="txt">
                        <p>Accept Multi Currency</p>
                        <p>Payment On Multi Currency</p>
                    </div>
                </li>
                <li>
                    
                <i class="fa-solid fa-hand-holding-hand"></i>
                    <div className="txt">
                        <p>Customer Service</p>
                        <p>Online 24/7 Support</p>
                    </div>
                </li>
            </ul>
            </div>
       </section>
        </>
    )
}

export default Home;