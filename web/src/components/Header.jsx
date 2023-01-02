import { Link } from "react-router-dom";
import logo from "../pics/logo_color.svg";
import "../css/Header.css";

export const Header = () => {
    return (
        <>
        <header>
            <div className="header-wrapper">
                <div className="logo-wrapper">
                    <Link to='/' target='_self'>
                    <img src={logo} alt="logo-color" />
                </Link>
                </div>
                <div className="links-wrapper">
                    <Link to='/recipes/breakfast' className="recipe-link">
                    BREAKFAST
                    </Link>
                    <span className="bullet">&#x2022;</span>
                    <Link to='/recipes/brunch' className="recipe-link">
                        BRUNCH
                    </Link>
                    <span className="bullet">&#x2022;</span>
                    <Link to='/recipes/lunch' className="recipe-link">
                        LUNCH
                    </Link>
                    <span className="bullet">&#x2022;</span>
                    <Link to='/recipes/dinner' className="recipe-link">
                        DINNER
                    </Link>
                </div>
                <div className="buttons-wrapper">
                    <button className="login-btn">
                        <Link to='/login' className="login-btn-link">
                            LOG IN
                        </Link>
                    </button>
                    <span className="or">or</span>
                    <button className="register-btn">
                        <Link to='/register' className="register-btn-link">
                            CREATE ACCOUNT
                        </Link>
                    </button>
                </div>
            </div>
        </header>
        </>
    )
};

// zoshto ne se pokazhuva .svg slika
// koj font se koristi
// koi boi se koristat
// slikite za receptite od kade se
