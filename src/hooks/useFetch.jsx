import PopUp from "../components/UI/popUp/PopUp";

import RequireAuth from "../components/RequireAuth.jsx";

import { useState } from "react";
function useFetchButton() {
    const [isAuthPopUp, setIsAuthPopUp] = useState(false);
    const authPopUp = (
        <PopUp isOpen={isAuthPopUp} onClose={() => setIsAuthPopUp(false)}>
            <RequireAuth />
        </PopUp>
    );

    return [setIsAuthPopUp, authPopUp];
}

export default useFetchButton;
