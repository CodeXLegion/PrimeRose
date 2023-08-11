import '../contact/contact.css'
import NavBar from '../nav_bar/Nav';
function Contact() {
// {  const nav = document.querySelector(".nav"),
//   searchIcon = document.querySelector("#searchIcon"),
//   navOpenBtn = document.querySelector(".navOpenBtn"),
//   navCloseBtn = document.querySelector(".navCloseBtn"),
//   buttons = document.querySelector('.button')

// searchIcon.addEventListener("click", () => {
//   nav.classNameList.toggle("openSearch");
//   nav.classNameList.remove("openNav");
//   buttons.style.display ='flex';
//   if (nav.classNameList.contains("openSearch")) {
//     buttons.style.display ='none';
//     return searchIcon.classNameList.replace("uil-search", "uil-times");
    
//   }
//   searchIcon.classNameList.replace("uil-times", "uil-search");
// });

// navOpenBtn.addEventListener("click", () => {
//   nav.classNameList.add("openNav");
//   nav.classNameList.remove("openSearch");
//   searchIcon.classNameList.replace("uil-times", "uil-search");
// });
// navCloseBtn.addEventListener("click", () => {
//   nav.classNameList.remove("openNav");
// });
// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classNameList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classNameList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });}

  return(
    <>
        <NavBar/>
        <div className="container">
          <span className="big-circle"></span>
          <img src={} className="square" alt="" />
          <div className="form">
            <div className="contact-info">
              <h3 className="title">Let's get in touch</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
              </p>
    
              <div className="info">
                <div className="information">
                  <img src={} className="icon" alt="" />
                  <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="information">
                  <img src={} className="icon" alt="" />
                  <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                  <img src={} className="icon" alt="" />
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
                  <input type="text" name="name" className="input" />
                  <label for="">Username</label>
                  <span>Username</span>
                </div>
                <div className="input-container">
                  <input type="email" name="email" className="input" />
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div className="input-container">
                  <input type="tel" name="phone" className="input" />
                  <label for="">Phone</label>
                  <span>Phone</span>
                </div>
                <div className="input-container textarea">
                  <textarea name="message" className="input"></textarea>
                  <label for="">Message</label>
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