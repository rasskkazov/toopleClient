import "../stylesheets/Footer.scss";

import logo from "../img/p/logo.png";
import logo2x from "../img/p/logo@2x.png";

function Footer() {
    return (
        <footer className="footer">
            <hr />
            <div className="footer__left">
                <div className="footer__logo">
                    <picture>
                        <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
                    </picture>
                </div>
                <div className="footer__copyright">
                    <span>©2023</span>, Toople
                </div>
            </div>
            <div className="footer__right">
                <div className="footer__address">
                    Россия, г. Санкт-Петербург, ул. Тупейшая, 2
                </div>
                <div className="footer__contacts">
                    <div className="footer__phone">+7 (999) 666-22-22</div>
                    <div className="footer__email">toople@money.com</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
