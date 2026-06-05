import { LOGO_URL } from "../utils/constants"; 
import { use, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Body from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} alt="Foodie Woodie Logo" />
                <h2 className="companyName">Foodie Woodie 😋</h2>
                </div>
            <div className="nav-items">
                <ul>
                    <li className="online-status">Online: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Conatct Us</Link>
                    </li>
                    <li className="cart">
                        <Link to="/Cart">🛒 Cart</Link>    
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;