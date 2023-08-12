import React from 'react'
import './about.css'
import Heropic from '../Hones/images/plant-2004483_1280.jpg'
import NavBar from '../nav_bar/Nav'

function about() {
  return (
    <>
    <NavBar/>
    <div class="hero">
        <h1 class="who">
            Who are we <br/> 
            Why do we do this
        </h1>
        
        <div class="image-of-plant">
            <img src={Heropic} alt="" class="heropic"/>
        </div>
    </div>
    <div class="about-us">
        <h3 class="welcome">
            Welcome to PRIMEROSE, where our passion for plants cultivates a greener,<br/> more vibrant world. Our journey began with a simple seed of inspiration – <br/> a desire to reconnect people with the beauty and serenity that <br/> nature effortlessly provides.

        </h3>
        <p class="inspiration">
            At GREENWARE, we don't just sell plants; we nurture connections. <br/> We believe in the transformative power of greenery – how it can invigorate spaces, <br/> uplift spirits, and create environments where life flourishes. <br/> With every plant we offer, we're not just delivering foliage; <br/> we're delivering the promise of a healthier, more harmonious life. <br/>

        </p>
        <p class="inspiration1">
            Our story is rooted in a deep appreciation for nature's artistry. <br/> From the delicate unfurling of a fern's fronds to the majestic stature of a towering palm,<br/> each plant holds a unique tale waiting to be woven into the fabric of your life. <br/> We handpick and curate a diverse collection of plants, <br/> ensuring that each one brings its own character and charm to your living spaces.
           <br/> But GREENWARE is more than just a botanical emporium – <br/> we're a community of plant enthusiasts, a hub for knowledge and growth. Our team is composed <br/> of avid gardeners, horticulturists, and experts who are always here to guide you <br/> on your plant journey. Whether you're a seasoned gardener or just starting out, <br/> we're dedicated to sharing our expertise and fostering an environment <br/> where questions flourish as abundantly as our greenery.
        </p>
        <p class="inspiration2">
            Join us in embracing the beauty of growth, the joy of nurturing, <br/> and the tranquility of nature. Together, let's create spaces that breathe,  bloom, and inspire. <br/> Thank you for choosing PRIMEROSE as your partner in this leafy adventure.    
        </p>
        <p class="inspiration3">
            To a future filled with flourishing landscapes, <br/>
            Iwasen Ukaha <br/>
            Founder, CodeXlegion
        </p>


    </div>
    </>
  )  
}

export default about