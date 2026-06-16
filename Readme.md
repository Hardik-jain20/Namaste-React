# Namaste React 🚀

# Parcel's advantages

- Dev Build
- Starts the local server
- HMR - Hot Module Replacement (Automatically refreshes the web browser)
- Uses File Watching algrorithm (which is written in c++) for HMR
- Caching for faster build
- Minification and Compression of large code
- Image Optimisation due to faster reloads
- Bundling
- Consistent Hashing
- Code Splitting
- Differential bundling - To support older browser using browserlist dependency
- Easy diagnostics due to easier error handling
- HTTPs supporting app using npx parcel buid index.html
- Tree Shaking to remove unused unwanted code from the app.

# Foodie Woodie 😋 Project

Our App Mock design

- Header
  - logo
  - nav-items
    - home, about us, contact us, cart 🛒
- Body
  - Search bar and button
  - Restaurant Container
    - Restaurant Cards/ Carts
      - img
      - name of restaurant
      - star rating
      - ETA
      - price
- Footer
  - copyright
  - links
  - address
  - contact

# Import and Export types

1. Default Import and Export

- export default Component;
- import Component from "Component Path";

2. Named Import and Export

- export const VARIABLE_NAME;
- import {VARIABLE_NAME} from "Path";

# React Hooks

(Normal Js utility function)

- useState() - Superpowerful state variable in React, maintaining a sync with data and UI layer
- useEffect() -
- useRouteError - Maintains better Error handling.
- useContext - Helps us to excess data globally. [Uses CreateContext. useContext.Provider, useContext.Consumer]
- useSelector() - For subscribing the react component to the rtk store
- useDispatch() - for enabling dispatch to an action

# Corsproxy.io

- We use this to avoid using cors plugin, just got to this website copy the url for development
  and then paste that before your api_url.

# react-router-dom library

- Used for routing to different paths/rotes insode our app.

# parent-child life cycle in class based component

- parent constructor
- parent render
  - First Child constructor
  - First Child render

  - Second Child constructor
  - Second Child render

  DOM Updataion - In single batch
  - First Child Component Mount
  - Second Child Component Mount

- parent mount

# Redux

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector
- Initially in vanilla redux there was no mutation of state, new state was defined and then mutation was done to that and returning the newstate would provide us the mutated state.

# Types of Testing for Developers:

- Unit Testing - Testing a specific component.
- Integrated Testing - Testinng the integration between one or more than one component.
- End to End Testing / e2e testing - Testing the whole app from the user start to user end.

# Setting up Testing in our app

- Install React Testing Library
- Install jest
- Install Babel dependency
- Configure Babel
- Configure Parcel file to disable default babel transpilation
- jest configuration using npm init @jest/latest [npx jest --init deprecated], test environment to choose is jsdom
- Install jsdom library

# Testing file Syntax

- They can be stored in \_\_\tests\_\_ folder [Two underscore in the front and two underscore in the back are known as '**DUNDER METHOD**']
- They are named as:
  - Header.test.js
  - Header.test.ts
  - Header.spec.js
  - Header.spec.ts
