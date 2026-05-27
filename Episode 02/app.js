import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id: "heading"}, "I'm heading from React");
const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(heading);