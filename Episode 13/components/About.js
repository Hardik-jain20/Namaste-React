import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor.");
  }

  componentDidMount() {
    //console.log("Parent Component Mount.");
    // used for api_calls
  }
  render() {
    //console.log("Parent render.");
    return (
      <div className="about">
        <div className="my-2">
          <h1>About Us!!!</h1>
          <h2>
            Foodie Woodie 😋 is a trusted food delivering platform loved by many
            hungry faces.
          </h2>
        </div>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Hardik class"}
          location={"Nathdwara"}
          contact={"6376966118"}
        />
      </div>
    );
  }
}

export default About;
