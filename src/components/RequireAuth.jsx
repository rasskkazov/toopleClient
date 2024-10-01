import "../stylesheets/RequireAuth.scss";

import { Link } from "react-router-dom";
function RequireAuth() {
    return (
        <div className="requireAuth">
            <h1>Требуется авторизация</h1>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
                Войти
            </Link>
        </div>
    );
}
export default RequireAuth;
