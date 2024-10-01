import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="app">
            <div className="app__container">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default RootLayout;
