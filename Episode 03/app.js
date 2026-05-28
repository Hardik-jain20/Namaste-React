import React from "react"
import ReactDOM from "react-dom/client"

//React.createElement => ReactElement (which is an object) => HtmlElement(using render)
const heading = React.createElement("h1", {id: "heading"}, "I'm heading from React");

// jsx - html or XML like syntax in js, [not html inside js].
// jsx is transpiled before it reaches to js engine - Using Parcel - Which package: BABEL

//JSX => converts to React.createElement using Babel => ReactElement (which is an object) => HtmlElement(using render)
// For multi line jsx use (), for single line no need. Also to define class to an html element, define className in jsx.

//ReactElement
const jsxHeading = (<h1 id="heading" className="Head">
    This is the heading from jsx! 🚀
    </h1>)

//React functional Component -- Remember to declare in Uppercase.
const HeadingComponent = () => {
    return <h1> Heading using functional component! </h1>
};

// or
const HeadingComponent2 = () => (
    <div id="container">
    <h1 id="heading1" className="heading1"> Heading using functional component without return!</h1>
    </div>
);

// or

const HeadingComponent3 = () => <h1>Hello!!</h1>;

// Components inside components -- components composition
const Title = () => (
    <h1>Title</h1>
);

// Three ways
const HeadingComponent4 = () => (
    <div id="container">
        {Title()}
        <Title></Title>
        <Title />
    <h1 id="heading1" className="heading1"> Heading using functional component without return!</h1>
    </div>
);

// js inside component - using {}
const number = 1000;
const Js = () => (
    <div id="js">
        <h2>{number * 5}</h2>
        <h1>This is Namaste React 🚀</h1>
    </div>
);

// ReactElement inside component
const Elem = () => (
    <div id="container">
        {jsxHeading}
        <h1>Hello World</h1>
    </div>
);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(heading);
root.render(jsxHeading);

// How to render functional component
root.render(<Elem />);
//updated