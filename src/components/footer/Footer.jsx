import React from 'react'
import '../footer/footer.css'
// import { NavLink } from "react-router-dom"

function Footer() {
    return<>
     <footer>
        <div className="footer">
        <div className={"leftFooter"} >
            <p>STAY IN THE LOOP</p>
            <p>Stay in the loop special offers, plant-parenting tips, and more.</p>
            <div className={"socialIcons"}>
                <div className="img"><i class='bx bxl-facebook'></i></div>
                <div className="img"></div>
            </div>
        </div>

        <div className={"rightFooter"}>
        
            <div className={"rightFooterContent"}>
                <ul>
                    <h3>Quick Links</h3>
                    <a to="/">Home</a>
                    <a to="/about">About Us</a>
                    <a to="/services">Services</a>
                    <a to="/contact">Contact Us</a>

                </ul>
            </div>

            <div className={"rightFooterContent"}>
                <ul>
                    <h3>Support</h3>
                    <li>Help + FAQs</li>
                    <li>Shipping</li>
                    <li>Returns</li>
                    <li>Contact Support</li>
                </ul>
            </div>

            <div className={"rightFooterContent"}>
                <ul>
                    <h3>Office</h3>
                    <li>+2349046807203</li>
                    <li>Aptech Computer Education,<br/> Beside Shell IA, Rumuobiakani, <br/> Port Harcourt</li>
                </ul>
            </div>

            <div className={"rightFooterContent"}>
                <ul>
                    <h3>Company</h3>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
        </div>
        <div className={"copyright"}>
        <p>All Rights Reserved. CodeXLegion</p>
     </div>
     </footer>
   </>
}

export default Footer