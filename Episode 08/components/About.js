import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor.");

    }

    componentDidMount() {
        console.log("Parent COmponent Mount.");
    }
    render() {
        console.log("Parent render.")
        return (
            <div className="about">
                <h1>About Us!!!</h1>
                <h2>Foodie Woodie 😋 is a trusted food delivering platform
                    loved by many hungry faces.
                </h2>
                <UserClass name = {"Hardik class"} location = {"Nathdwara"} contact = {"0123456789"}/>
            </div>
        )
    }
}

export default About;