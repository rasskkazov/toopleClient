import "../stylesheets/Header.scss";

import logo from "../img/p/logo.png";
import logo2x from "../img/p/logo@2x.png";
import burger from "../img/i/burger.svg";

import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/index.js";
function Header() {
    const context = useContext(AuthContext);
    const authToken = context.authToken;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="header__logo">
                <picture>
                    <Link to="/">
                        <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
                    </Link>
                </picture>
            </div>
            <div className="header__desktop-menu">
                <nav>
                    <ul>
                        <NavLink to="courses">Курсы Moodle</NavLink>
                        {authToken && (
                            <NavLink to={`profile/me`}>Профиль</NavLink>
                        )}
                        {authToken && (
                            <NavLink to="create">Разместить задание</NavLink>
                        )}
                        <NavLink to="about">О сайте</NavLink>
                    </ul>
                </nav>
                {!authToken && (
                    <Link to="login">
                        <button className="header__signup-btn">Войти</button>
                    </Link>
                )}
            </div>
            <div
                className="overlay"
                onClick={() => setIsMenuOpen(false)}
                isopen={isMenuOpen ? "true" : "false"}
            ></div>
            <div
                className="header__mobile-menu"
                isopen={isMenuOpen ? "true" : "false"}
            >
                <nav>
                    <ul>
                        <NavLink
                            to="courses"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Курсы Moodle
                        </NavLink>
                        {authToken && (
                            <NavLink
                                to={`profile/me`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Профиль
                            </NavLink>
                        )}
                        {authToken && (
                            <NavLink
                                to="create"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Разместить задание
                            </NavLink>
                        )}
                        <NavLink
                            to="about"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            О сайте
                        </NavLink>
                    </ul>
                </nav>
                {!authToken && (
                    <Link
                        to="login"
                        style={{ textDecoration: "none" }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <button className="header__signup-btn">Войти</button>
                    </Link>
                )}
            </div>

            <button
                className="header__burger-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <img src={burger} alt="burger" />
            </button>
        </header>
    );
}

function NavLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: false });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Header;
