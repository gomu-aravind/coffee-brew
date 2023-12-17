import { Link, useRouteError } from "react-router-dom"
import errorImg from '../assets/404.png'
export default function ErrorPage(){
    const error=useRouteError();
    return <section className="errorpage">
        <div className="error-content">
        <img src={errorImg} alt="404 image"/>
        <h2>{error.message || 'Page not found'}</h2>
        <Link to='/'>Go to Home Page</Link>
        </div>
    </section>
}