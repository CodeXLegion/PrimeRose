import '../contact/contact.css'
import NavBar from '../nav_bar/Nav';
function Contact() {
  return(
    <>
        <NavBar className='navBar'/>
        <div className="container">
          <span className="big-circle"></span>
          {/* <img src={} className="square" alt="" /> */}
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>
    
              <div className="info">
                <div className="information">
                  {/* <img src={} className="icon" alt="" /> */}
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="information">
                  {/* <img src={} className="icon" alt="" /> */}
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  {/* <img src={} className="icon" alt="" /> */}
                  <p>123-456-789</p>
                </div>
              </div>
    
              <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
    
            <div className="contact-form">
              <span className="circle one"></span>
              <span className="circle two"></span>
    
              <form action="index.html" autocomplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                  <input type="text" name="name" placeholder='Username' className="input" />
                  {/* <label for="">Username</label> */}
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" placeholder='Email' name="email" className="input" />
                  <label for=""></label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" placeholder='Phone' name="phone" className="input" />
                  <label for=""></label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" placeholder='Message' className="input"></textarea>
                  <label for=""></label>
                  <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
              </form>
            </div>
          </div>
        </div> 

    </>
  )
}
export default Contact;