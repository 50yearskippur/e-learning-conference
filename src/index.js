import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import styled from 'styled-components';
import BackgroundImg from './static-media/Background.png'

const Background = styled.div({
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "fit-content",
    width: "100%",
    position: "absolute",
    top: 0,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Background>
            <App />
        </Background>
    </Router>
  </React.StrictMode>
);