import React, { useState } from 'react';
import NavBar from '../nav_bar/Nav';
import '../shop/shop.css';
import FooterCompo from '../footer/Footer';
import { Plantroducts } from '../Data/plantinfo';

function Shop() {
    const [selectedSizeFilters, setSelectedSizeFilters] = useState([]);
    const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);

    const handleSizeFilterChange = (size) => {
        if (selectedSizeFilters.includes(size)) {
            setSelectedSizeFilters(selectedSizeFilters.filter(item => item !== size));
        } else {
            setSelectedSizeFilters([...selectedSizeFilters, size]);
        }
    };
    
    const handlePriceFilterChange = (price) => {
        if (selectedPriceFilters.includes(price)) {
            setSelectedPriceFilters(selectedPriceFilters.filter(item => item !== price));
        } else {
            setSelectedPriceFilters([...selectedPriceFilters, price]);
        }
    };

    return (
        <>
            <main>
                <NavBar />
                <button className='resbutton'>Sort / Filter </button>
                <header>
                    <p>SHOP ALL <span>PLANTS</span></p>
                    <select>
                        <option value="" key="">Sort by Featured</option>
                        <option value="" key="">Sort by price:Low To High</option>
                        <option value="" key="">Sort by price:High To Low</option>
                    </select>
                </header>
                <div className='content'>
                    <div className='sorters'>
                    <div className="accord">
                        <div className="accord_control">PRICE</div>
                        <div className="accord_panel">
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$50")}
                                    checked={selectedPriceFilters.includes("$50")}
                                />
                                $50
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$60")}
                                    checked={selectedPriceFilters.includes("$60")}
                                />
                                $60
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$70")}
                                    checked={selectedPriceFilters.includes("$70")}
                                />
                                $70
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$80")}
                                    checked={selectedPriceFilters.includes("$80")}
                                />
                                $80
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$90")}
                                    checked={selectedPriceFilters.includes("$90")}
                                />
                                $90
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handlePriceFilterChange("$100")}
                                    checked={selectedPriceFilters.includes("$100")}
                                />
                                $100
                            </li>
                            
                        </div>
                    </div>

                    <div className="accord">
                        <div className="accord_control">SIZE</div>
                        <div className="accord_panel">
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("SM")}
                                    checked={selectedSizeFilters.includes("SM")}
                                />
                                SM
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("MD")}
                                    checked={selectedSizeFilters.includes("MD")}
                                />
                                MD
                            </li>
                            <li>
                                <div className=''></div>
                                <input
                                    type="checkbox"
                                    onChange={() => handleSizeFilterChange("LG")}
                                    checked={selectedSizeFilters.includes("LG")}
                                />
                                LG
                            </li>
                            
                        </div>
                    </div>
                        <button>CLEAR FILTER</button>
                    </div>
                    <div className='main'>
                        <div className='main_grid'>
                            {Plantroducts.filter(product => {
                                return (
                                    selectedSizeFilters.length === 0 || selectedSizeFilters.includes(product.size)
                                ) && (
                                    selectedPriceFilters.length === 0 || selectedPriceFilters.includes(product.price)
                                );
                            }).map(producters => {
                                return (
                                    <div className="plantinfo">
                                        <div class="img"><img src={producters.img1} alt="" /></div>
                                        {/* <div class="play">
                                            ADD TO CART
                                        </div> */}
                                        <div class="plantinfo_text">
                                            <div className='plant'>{producters.name}</div>
                                            <div className='Price'>{producters.price}</div>
                                        </div>
                                        <div class="plantinfo_text2">
                                            <div className='plant'></div>
                                            <div className='Price'>{producters.size}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <section className="teamWrapper">
                    <div className="heading">
                        <h2>PLANTS MADE <span>SIMPLE</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum quod excepturi recusandae, autem exercitationem neque ipsa nemo, cum explicabo praesentium dolores nam ratione magni reprehenderit quibusdam, est quam debitis.</p>
                    </div>
                    <div className="teamCardWrapper">
                        <div className="teamCard">
                            <div className='img'><img src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=300,width=300,metadata=copyright,format=webp/wp-content/uploads/2020/05/living-room-ready-opt2.jpg" alt="" /></div>
                            <div className="teamCardContent">
                                <h3>Innovative Shipping</h3>
                                <p>Our unique packaging technology — made mostly <br/>from recycled and/or biodegradable materials — <br/>holds your plant securely in place so it arrives safely <br/><span> and without the mess.</span></p>
                            </div>
                        </div>
                        <div className="teamCard">
                            <div className='img'><img src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=300,width=300,metadata=copyright,format=webp/wp-content/uploads/2020/05/living-room-ready-opt2.jpg" alt="" /></div>
                            <div className="teamCardContent">
                                <h3>Quality Plants Guaranteed</h3>
                                <p>From our tabletop collections to our XL  Money Trees, <br/> our fully-grown and potted indoor plants  come with a <br/> 30-day guarantee because they ship in boxes that hold  <br/> <span>the pot in place.</span></p>
                            </div>
                        </div>
                        <div className="teamCard">
                            <div className='img'><img src="https://bloomscape.com/cdn-cgi/image/quality=75,fit=scale-down,height=300,width=300,metadata=copyright,format=webp/wp-content/uploads/2020/05/living-room-ready-opt2.jpg" alt="" /></div>
                            <div className="teamCardContent">
                                <h3>Plenty of Guidance</h3>
                                <p>From detailed care instructions to real-time support, <br/> we’re here to make plants easy. Chat with our plant <br/> care experts on the Grow-How® Team for help. and learn <span>how to take care of your plant</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterCompo />
        </>
    );
}

export default Shop;
