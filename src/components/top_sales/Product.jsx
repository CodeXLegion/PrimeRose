import '../top_sales/product.css'
import { Trends } from '../Data/top_sales';
// import { useState } from 'react';

function Product() {
    return(
        <>
        <div id="products">
            <div className="title">
                <h1>Trending Plants</h1>
            </div>
            <div className="plant_con">
            <div id="plants">
                {Trends.map(trend =>{
                    return(
                        <div className="plant">
                            <div className="img">
                                <ul className="opt">
                                    <li className='like'>
                                    <i class="fa-regular fa-heart"></i>
                                    </li>
                                    <li className="cart">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    </li>
                                    <li className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    </li>
                                </ul>
                                <img src={trend.img1} alt="" />
                            </div>
                            <div className="txt">
                                <p className='title2'>{trend.name}</p>
                                <p className="price">{trend.price}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
      
        </>
    )
}
export default Product;