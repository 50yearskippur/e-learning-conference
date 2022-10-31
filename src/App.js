import { useEffect } from "react";
import MobileDetection from "./utils/MobileDetection";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Bar from "./components/Bar/Bar";

function App() {
  const navigate = useNavigate();  
  useEffect(()=>{
    if(!MobileDetection()){
        navigate('/notMobile');
    }
  },[navigate])  

  return (
    <>
        <Routes>
            <Route path="/" element={<Navigate to={'/e-learning-conference'} />} />
            <Route path="/e-learning-conference" element={<HomePage />} />
        </Routes>
        <Bar />
    </>
  );
}

export default App;