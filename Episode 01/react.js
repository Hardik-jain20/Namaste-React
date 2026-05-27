// const heading = React.createElement("h1", {id: "heading1"}, "Hello World from React!");

/*
Now to generate parent child using react like below:
<div id= "parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>

/*
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, 
        React.createElement("h1", {}, "I'm h1 tag")
    )
);
*/

/*
This createElement from react generates an object 
which converts to the written tag using render.

Now for siblings like 2 child inside the parent we have to 
pass an array of elements in the third attribute.
*/

const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
        [React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 tag")]
    ),
React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 tag")]
    )]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);