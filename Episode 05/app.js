import React from "react"
import ReactDOM from "react-dom/client"
//import logo from "./foodie-woodie-logo.png"
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);