import "../stylesheets/Login.scss";

import InputField from "../components/UI/input_field/InputField.jsx";
import logIn from "../api/login.js";
import signUp from "../api/signup.js";

import { useState, useContext } from "react";
import { AuthContext } from "../context/index.js";
import { useNavigate } from "react-router-dom";

import useAuthToken from "../hooks/useAuthToken.jsx";

function Login() {
    const [, setCookiesAuthToken] = useAuthToken();
    const context = useContext(AuthContext);
    const setAuthToken = context.setAuthToken;

    const navigate = useNavigate();
    const [isSigning, setIsSigning] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    async function submit(e) {
        e.preventDefault();
        if (!isSigning) {
            logIn(
                { email, password },
                navigate,
                setCookiesAuthToken,
                setAuthToken
            );
            return;
        }
        if (isSigning) {
            const emailPattern =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert(
                    "Скорее всего это не почта (пж не 123@edu.spbgasu.com.ru.net)"
                );
                return;
            }
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
            if (!passwordPattern.test(password)) {
                alert(
                    "Сейчас внимательно: латиница, цифорку, заглавную. 8 штук"
                );
                return;
            }
            if (password === confirmPassword) {
                signUp(
                    { email, password },
                    navigate,
                    setCookiesAuthToken,
                    setAuthToken
                );
            } else {
                alert("Пароли не совпадают");
            }
        }
    }
    return (
        <div className="login">
            <div className="login__title">
                Вход в <span>Toople</span>
            </div>

            <form onSubmit={submit}>
                <div className="login__email">
                    <InputField
                        label={{ for: "email", text: "E-mail" }}
                        placeholder={"e-mail"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="login__password">
                    <InputField
                        label={{ for: "password", text: "Пароль" }}
                        placeholder={"password"}
                        type={"password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {isSigning && (
                    <InputField
                        label={{
                            for: "confirm_password",
                            text: "Подтвердите пароль",
                        }}
                        placeholder={"password"}
                        type={"password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                )}
                <input
                    type="submit"
                    value={isSigning ? "Зарегистрироваться" : "Войти"}
                />
            </form>
            <div className="login__or">или</div>
            <button
                className="login__signup"
                onClick={() => {
                    setIsSigning(!isSigning);
                }}
            >
                {isSigning ? "Войти" : "Зарегистрироваться"}
            </button>
        </div>
    );
}

export default Login;
