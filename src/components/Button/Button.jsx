import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div(({fill,width, fontSize, style})=>({
    ...(fill) && {border: '1.5px solid white'},
    width,
    backgroundColor: fill ? 'none' : 'rgba(128,114,200, 0.5)',
    fontFamily: 'Anomalia-light',
    height: '2.3rem',
    color: 'white',
    textAlign: "center",
    fontSize,
    lineHeight: 1.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    ...style
}))


export default function Button({type, text, onClick, width, fontSize, style}){
    return(
        <ButtonContainer
            fill={type}
            width={width}
            onClick={()=>onClick()}
            fontSize={fontSize}
            style={style}
        >  
            {text}
        </ButtonContainer>
    )
}