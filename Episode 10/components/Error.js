import { useRouteError, Link } from "react-router-dom"
import Body from "./Body";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (<div className="error bg-linear-to-b from-white via-amber-50/30 to-amber-100/60 flex flex-col justify-center items-center min-h-screen w-screen py-16">
        <img className="error-img rounded-lg object-cover w-87.5 h-60" alt="Error Image" src="https://do6gp1uxl3luu.cloudfront.net/assets/error404.gif"/>
        <h1 className="font-bold"> Oops!! </h1>
        <h3 className="font-semibold">404 - Page not found☹️</h3>
        <p className="pt-2">The page you are looking for might have been removed, </p>
        <p className="err-para pb-2">    renamed or is temporarily unavailable.</p>
        <button className="home border mt-6 px-5 py-2 border-amber-500 rounded-full text-amber-950 font-medium bg-transparent hover:bg-amber-500 hover:text-white transition-all duration-200">
            <Link to = "/">Go back to Home</Link>
        </button>
    </div>)
}

export default Error;