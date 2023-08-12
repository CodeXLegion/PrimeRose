import React from 'react'
import '../signUp/signup.css';
import NavBar from '../nav_bar/Nav';

const Sign = ({open, onclosesign}) => {
    if (!open) {
        return null;
    }
  return (
    <>
    <NavBar/>
    <div onClick={onclosesign} className="overlaysign">
      <div onClick={(e)=>{
        e.stopPropagation()
      }} className="signupPage">
      <div className="signup-container">
            <div className="title">
            <h2>Sign Up</h2>
            <i class="fa-solid fa-xmark" onClick={onclosesign}></i>
            </div>
            
            <form className="signup-form">
                <input type="text" className="signup-input" placeholder="Name" required/>
                <input type="email" className="signup-input" placeholder="Email" required/>
                <input type="password" className="signup-input" placeholder="Password" required/>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default Sign;