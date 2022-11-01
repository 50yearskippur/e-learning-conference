import React from "react";
import styled from "styled-components";
import { staticData } from "./staticData";
import Graph from '../../static-media/graph.png';

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop, textAlign})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: "white",
    textAlign: textAlign ? textAlign : "center"
}))

const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '70%',
    whiteSpace: 'pre-wrap'
})

const GraphElement = styled.img({
    width: "80%",
    marginTop: "3rem"
})

export default function AboutUs(){
    return(
        <ContentWrapper>
            <TextArea
                fontFamily="Anomalia-demibold"
                fontSize="2rem"
            >
                {staticData.title}
            </TextArea>
            <TextArea
                fontFamily="Assistant-Regular"
                fontSize='1rem'
                marginTop="1.5rem"
            >
                {staticData.explanationParagraph}
            </TextArea>
            <GraphElement 
                src={Graph}
            />
            <TextArea
                fontFamily="Assistant-Regular"
                fontSize="1rem"
                marginTop="1.5rem"
            >
                {staticData.listTitle}
            </TextArea>
            <TextArea
                fontFamily="Assistant-Light"
                fontSize="1rem"
                marginTop="0.3rem"
            >
                {staticData.list}
            </TextArea>
            <TextArea
                fontFamily="Assistant-Regular"
                fontSize="0.8rem"
                marginTop="2.3rem"
            >
                {staticData.order}
            </TextArea>
        </ContentWrapper>
    )
}