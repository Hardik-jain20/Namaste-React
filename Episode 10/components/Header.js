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
        <div className="header flex justify-between border-2 border-black border-solid">
            <div className="logo flex items-center ">
                <img className="logo-img w-32" src={LOGO_URL} alt="Foodie Woodie Logo" />
                <h2 className="companyName">Foodie Woodie 😋</h2>
                </div>
            <div className="nav-items">
                <ul className="flex m-4 p-4">
                    
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Conatct Us</Link>
                    </li>
                    <li className="cart px-4">
                        <Link to="/Cart">🛒 Cart</Link>    
                    </li>
                    <button className="login-btn px-4" onClick={() => {
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