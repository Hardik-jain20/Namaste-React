import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Body from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //   const data = useContext(UserContext);
  //   console.log(data);
  // Or
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between border-2 border-black border-solid bg-amber-50">
      <div className="logo flex items-center ">
        <img
          className="logo-img w-32"
          src={LOGO_URL}
          alt="Foodie Woodie Logo"
        />
        <h2 className="text-2xl font-bold pl-4">Foodie Woodie 😋</h2>
      </div>
      <div className="nav-items flex items-center text-xl">
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
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login-btn px-4 cursor-pointer hover:bg-amber-400 hover:shadow-md hover:shadow-gray-500 hover:rounded-2xl"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          {/*<li className="px-4 font-bold">{data.loggedInUser}</li>*/}
          <li className="px-4 font-bold">{loggedInUser}</li>
          <li className="cart px-4">
            <Link className="flex items-center gap-2" to="/cart">
              <div className="relative ">
                <img
                  className="w-8"
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart_v4-6ac9a8.svg"
                />
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold">
                  {cartItems.length}
                </span>
              </div>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
