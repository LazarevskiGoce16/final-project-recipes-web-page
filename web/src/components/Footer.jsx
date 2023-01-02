import { Link } from "react-router-dom";
import logo from "../pics/logo_white.svg";

export const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer-wrapper">
                <Link to='/'>
                    <img src={logo} alt="logo-white" />
                </Link>
                <Link to='/recipes/breakfast'>
                    BREAKFAST
                </Link>
                <span className="bullet">&#x2022;</span>
                <Link to='/recipes/brunch'>
                    BRUNCH
                </Link>
                <span className="bullet">&#x2022;</span>
                <Link to='/recipes/lunch'>
                    LUNCH
                </Link>
                <span className="bullet">&#x2022;</span>
                <Link to='/recipes/dinner'>
                    DINNER
                </Link>
                <div className="footer-copyright">
                    <p>Baby's Food Place</p>
                    <span>copyright &#169; 2021</span>
                </div>
            </div>
        </footer>
        </>
    )
};
