import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about">
            <h1>About Us!!!</h1>
            <h2>Foodie Woodie 😋 is a trusted food delivering platform
                loved by many hungry faces.
            </h2>
            <User name = {"Hardik function"} location = {"Nathdwara"} contact = {"0123456789"}/>
            <UserClass name = {"Hardik class"} location = {"Nathdwara"} contact = {"0123456789"}/>
        </div>
    )
}

export default About;