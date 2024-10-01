import "../stylesheets/AdCard.scss";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";
import iconTaskCompleted from "../img/i/taskCompleted.svg";

import useAuthPopUp from "../hooks/useAuthPopUp.jsx";
import markAsCompleted from "../api/markAsCompleted.js";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "../context/index.js";
import useAuthToken from "../hooks/useAuthToken";
import fetchProfile from "../api/fetchProfile.js";
function DoerCard({ ad }) {
    const [cookiesAuthToken, setCookiesAuthToken, removeCookiesAuthToken] =
        useAuthToken();
    const context = useContext(AuthContext);
    const authToken = context.authToken;
    const setAuthToken = context.setAuthToken;
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(ad.hasCompleted);
    const [setIsAuthPopUp, authPopUp] = useAuthPopUp();
    const [cookies] = useCookies(["user"]);
    async function addToCompleted() {
        if (!authToken) {
            setIsAuthPopUp(true);
            return;
        }
        setIsDisabled(true);
        const response = await markAsCompleted(ad, cookies.AuthToken);
        if (response.status === 401) {
            removeCookiesAuthToken();
            setAuthToken(false);
            navigate("/login");
            return;
        }
    }
    async function goToProfile() {
        if (!authToken) {
            setIsAuthPopUp(true);
            return;
        }
        const response = await fetchProfile(
            ad.doerId,
            cookies.AuthToken,
            navigate
        );
        if (response.status === 401) {
            removeCookiesAuthToken();
            setAuthToken(false);
        } else {
            navigate(`/profile/${ad.doerId}`);
        }
    }
    return (
        <>
            <div className="doer-card">
                <div className="doer-card__top">
                    <div className="doer-card__name">{ad.name}</div>
                    <div className="doer-card__favorites">
                        <button
                            onClick={addToCompleted}
                            disabled={isDisabled}
                            title="Похвалить за выполненную работу ><"
                        >
                            <IconTemplate
                                icon={iconTaskCompleted}
                                color={isDisabled ? "#8de1f9" : "#e8ebec"}
                            />
                        </button>
                    </div>
                </div>
                <div className="doer-card__middle">
                    <div>
                        <span>Отправит свой вариант:</span>
                        <span>{ad.doerVariantPrice}</span>
                    </div>
                    <div>
                        <span>Сделает ваш:</span>
                        <span>{ad.customerVariantPrice}</span>
                    </div>
                </div>
                <div className="doer-card__bottom">
                    <button
                        className="doer-card__contact"
                        onClick={goToProfile}
                    >
                        Перейти
                    </button>
                </div>
            </div>
            {authPopUp}
        </>
    );
}
export default DoerCard;
