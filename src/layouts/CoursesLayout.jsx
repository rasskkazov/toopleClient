import { Outlet } from "react-router-dom";

function CoursesLayout() {
    return (
        <div className="courses-layout">
            <Outlet />
        </div>
    );
}

export default CoursesLayout;
