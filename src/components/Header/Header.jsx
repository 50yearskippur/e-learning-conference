import React from "react";
import styled from "styled-components";
import Artech from '../../static-media/Artech.png';

const Wrapper = styled.div({
    width: '100%',
    backgroundColor: "rgb(255,255,255,0.2)",
    height: "3rem",
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0
})

export default function Header(){
    return (
        <Wrapper>
            <img 
                src={Artech} 
                alt="artechLogo" 
                style={{height: "90%", marginLeft: "2%"}}    
            />
        </Wrapper>
    )
}