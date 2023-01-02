import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
        <header>
            <div className="header-wrapper">
                <Link to='/' target='_self'>
                    <img src="../pics/logo_color.png" alt="logo-color" />
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
                <button className="login-btn">
                    <Link to='/login'>
                        LOG IN
                    </Link>
                </button>
                <span>or</span>
                <button className="register-btn">
                    <Link to='/register'>
                        CREATE ACCOUNT
                    </Link>
                </button>
            </div>
        </header>
        </>
    )
};

// zoshto ne se pokazhuva .svg slika
// koj font se koristi
// koi boi se koristat
// slikite za receptite od kade se
