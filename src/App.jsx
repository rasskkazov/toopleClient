import "./stylesheets/App.scss";

import RootLayout from "./layouts/RootLayout.jsx";
import CoursesLayout from "./layouts/CoursesLayout.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Course from "./pages/Course.jsx";
import Profile from "./pages/Profile.jsx";
import CreateAd from "./pages/CreateAd.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/index.js";
import { useState } from "react";
import { useCookies } from "react-cookie";

function App() {
    const [cookie] = useCookies(["user"]);
    const [authToken, setAuthToken] = useState(cookie.AuthToken);

    return (
        <AuthContext.Provider
            value={{
                authToken,
                setAuthToken,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="about" element={<About />} />
                        <Route path="courses" element={<CoursesLayout />}>
                            <Route index element={<Courses />} />
                            <Route path=":courseId" element={<Course />} />
                        </Route>
                        {authToken && (
                            <Route path="profile" element={<CoursesLayout />}>
                                <Route index element={<Profile />} />
                                <Route
                                    path=":profileId"
                                    element={<Profile />}
                                />
                            </Route>
                        )}
                        {authToken && (
                            <Route path="create" element={<CreateAd />} />
                        )}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
