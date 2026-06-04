import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2,

        };
    }
    render() {
        const {name, location, contact} = this.props; 
        const {count} = this.state;
        return (
            <div className="user">
                <h2>Count: {count}</h2>
                <h2>Count2: {this.state.count2}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}
export default UserClass;