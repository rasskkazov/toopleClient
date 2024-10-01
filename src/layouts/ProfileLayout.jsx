import { Outlet } from "react-router-dom";

function ProfileLayout() {
    return (
        <div className="profile-layout">
            <Outlet />
        </div>
    );
}

export default ProfileLayout;
