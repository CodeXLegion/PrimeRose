
import '../Hones/home.css';
import '../Hones/collect.css';
import img from './images/hero1.webp'
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
                {/* <img src={img} alt="" /> */}
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
                        <button>{collect.btn}</button>
                    </div>
                    <div className="col_img">
                    <img src={collect.img} alt="" />
                    </div>
                </div>
            )
        })}
       </section>
       <Product className="products"/>

        </>
    )
}

export default Home;