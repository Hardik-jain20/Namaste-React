import { useRouteError, Link } from "react-router-dom"
import Body from "./Body";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (<div className="error">
        <img className="error-img" alt="Error Image" src="https://do6gp1uxl3luu.cloudfront.net/assets/error404.gif"/>
        <h1> Oops!! </h1>
        <h3>404 - Page not found☹️</h3>
        <p>The page you are looking for might have been removed, </p>
        <p className="err-para">    renamed or is temporarily unavailable.</p>
        <button className="home">
            <Link to = "/">Go back to Home</Link>
        </button>
    </div>)
}

export default Error;