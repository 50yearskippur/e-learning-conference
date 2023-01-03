import { useEffect, useRef } from "react";
import MobileDetection from "./utils/MobileDetection";
import { Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Bar from "./components/Bar/Bar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Header from "./components/Header/Header";

function App() {
    const navigate = useNavigate();
    const scheduleRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (!MobileDetection()) {
            navigate("/notMobile");
        }

        let body = document.querySelector("body");

        if (location.pathname === "/about-us") {
            window.scrollTo(0, 0);
            if (window.innerHeight >= 650) {
                body.style.overflow = "hidden";
            }
        } else {
            body.style.overflow = "auto";
        }
    }, [navigate, location]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to={"/e-learning-conference"} />} />
                <Route path="/e-learning-conference" element={<HomePage scheduleRef={scheduleRef} />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/notMobile" element={<h1>מצטערים, אתר זה נתמך רק במובייל</h1>} />
            </Routes>
            <Bar scheduleRef={scheduleRef} />
        </>
    );
}

export default App;
