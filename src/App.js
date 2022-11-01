import { useEffect } from "react";
import MobileDetection from "./utils/MobileDetection";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Bar from "./components/Bar/Bar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Schedule from "./pages/Schedule/Schedule";
import styled from "styled-components";

const Scroll = styled.div({
    height: "76%",
    overflowY: 'auto',
    marginTop: '4.8rem'
})

function App() {
  const navigate = useNavigate();  


  useEffect(()=>{
    if(!MobileDetection()){
        navigate('/notMobile');
    }

  },[navigate])  

  return (
    <>
        <Scroll>
            <Routes>
                <Route path="/" element={<Navigate to={'/e-learning-conference'} />} />
                <Route path="/e-learning-conference" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </Scroll>
        <Bar />
    </>
  );
}

export default App;