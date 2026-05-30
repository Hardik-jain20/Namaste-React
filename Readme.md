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