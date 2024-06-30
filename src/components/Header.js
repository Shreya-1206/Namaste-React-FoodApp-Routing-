import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()  => {
  const [btnName, setBtnName] = useState("Login");
  
  useEffect(() => {console.log("Hello Will Rendered Everytime if dependency array is absent")})
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}/>
          <h1 className="logo-name">Namaste <span>Gastronomy</span></h1>
        </div>
        <div className="nav-items">
          <ul>
             <li><Link to = "/">Home</Link></li>
              {/* <li><Link to = "/about">About Us</Link></li> */}
              <li><Link to = "/about">About</Link></li>
              <li><Link to = "/contact">Contact</Link></li>
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