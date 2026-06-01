import { LOGO_URL } from "../utils/constants"; 
import { useState } from "react";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} alt="Foodie Woodie Logo" />
                <h2 className="companyName">Foodie Woodie 😋</h2>
                </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart">🛒 Cart</li>
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