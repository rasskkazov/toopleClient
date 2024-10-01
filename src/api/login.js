import address from "./addres";
const logIn = async (
    loginData,
    navigate,
    setCookiesAuthToken,
    setAuthToken
) => {
    try {
        const response = await fetch(address + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(loginData),
        });

        if (response.ok) {
            const responseData = await response.json();
            setCookiesAuthToken(responseData[0].token);
            setAuthToken(responseData[0].token);
            navigate("/profile/me");
        } else {
            alert("Неверные почта или пароль");
            console.error("Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
};
export default logIn;
