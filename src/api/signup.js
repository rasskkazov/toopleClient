import address from "./addres";
const signUp = async (
    signupdata,
    navigate,
    setCookiesAuthToken,
    setAuthToken
) => {
    try {
        const response = await fetch(address + "/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(signupdata),
        });

        if (response.ok) {
            const responseData = await response.json();
            setCookiesAuthToken(responseData[0].token);
            setAuthToken(responseData[0].token);
            navigate("/profile/me");
        } else {
            if (response.status === 409) {
                alert("Пользователь с таким email уже существует");
            }
            console.error("SignUp failed");
        }
    } catch (error) {
        console.error("Error during signup:", error);
    }
};
export default signUp;
