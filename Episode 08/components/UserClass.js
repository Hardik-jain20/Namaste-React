import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            },
        };
    }

    async componentDidMount() {
        // console.log("Child Component did mount. ");
        // used for api call
        const data = await fetch("https://api.github.com/users/Hardik-jain20");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        
        console.log(json);
        

    }

    render() {
        // console.log("Child render");
        const {name, location} = this.state.userInfo; 
        return (
            <div className="user">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Hardik-jain20</h4>
            </div>
        );
    }
}
export default UserClass;