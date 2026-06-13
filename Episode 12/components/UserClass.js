import React from "react";
import { avatar_URL } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component did mount. ");
  }

  render() {
    console.log("Child render");
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user border border-black w-100 my-2 p-2">
        <h2>Count: {count}</h2>
        <button
          className="border border-gray-400 cursor-pointer"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count ⬆️
        </button>
        <img src={avatar_URL} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}
export default UserClass;
