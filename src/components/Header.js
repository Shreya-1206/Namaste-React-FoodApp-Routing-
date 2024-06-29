import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()  => {
  const [btnName, setBtnName] = useState("Login");
  
  useEffect(() => {console.log("Hello Will Rendered Everytime if dependency array is absent")})
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button className = "btn-login"
               onClick = {() => {
                if(btnName === 'Login'){
                  setBtnName("Logout")
                }else {
                  setBtnName("Login")
                }
                }}>{btnName}</button>
          </ul>
        </div>
      </div> 
    )
  };

  export default Header;