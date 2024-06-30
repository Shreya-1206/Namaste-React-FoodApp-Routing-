import errorImgage from "../utils/error.jpg";
import { Link } from "react-router-dom";
const Error =() =>{
    return(
        <div className="error-conatiner">
         <img className = "error-img" src ={errorImgage}/>
         <Link to="/">
          <button className="back-toHome">Back To Home</button>
         </Link>
        </div>
    )
}

export default Error;