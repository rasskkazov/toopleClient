import { useCookies } from "react-cookie";
function useAuthToken() {
    const [cookie, setCookie, removeCookie] = useCookies(["user"]);
    const authToken = cookie.AuthToken;
    const setAuthToken = (value) => setCookie("AuthToken", value);
    const removeAuthToken = () => removeCookie("AuthToken");
    return [authToken, setAuthToken, removeAuthToken];
}

export default useAuthToken;
