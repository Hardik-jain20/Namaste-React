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
        <div className="header flex justify-between border-2 border-black border-solid bg-amber-50">
            <div className="logo flex items-center ">
                <img className="logo-img w-32" src={LOGO_URL} alt="Foodie Woodie Logo" />
                <h2 className="text-2xl font-bold pl-4">Foodie Woodie 😋</h2>
                </div>
            <div className="nav-items flex items-center">
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
                    <li className="px-4 ">
                        <Link to="/contact">Conatct Us</Link>
                    </li>
                    <li className="cart px-4">
                        <Link to="/Cart">🛒 Cart</Link>    
                    </li>
                    <button className="login-btn px-4 cursor-pointer hover:bg-amber-400 hover:shadow-md hover:shadow-gray-500 hover:rounded-2xl" onClick={() => {
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