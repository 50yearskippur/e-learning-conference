import React from "react";
import styled from "styled-components";
import { staticData } from "./staticData";
import Graph from '../../static-media/graph.png';

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop, textAlign, color})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: color ? color : "white",
    textAlign: textAlign ? textAlign : "center"
}))

const ContentWrapper = styled.div(()=>({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '100rem',
    whiteSpace: 'pre-wrap',
    overflow: 'hidden'
}));

const GraphElement = styled.img({
    width: "80%",
    marginTop: "2rem"
})

const InfoWrapper = styled.div({
    marginTop: "3.5rem",
    display: 'flex',
    flexDirection: "column",
    alignItems: "center"
})

export default function AboutUs(){
    return(
        <ContentWrapper>
            <InfoWrapper>

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
                    fontFamily="Assistant-SemiBold"
                    fontSize="1rem"
                    marginTop="6rem"
                    color="rgb(84,43,104)"
                >
                    {staticData.listTitle}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Light"
                    fontSize="1rem"
                    marginTop="0.3rem"
                    color="rgb(84,43,104)"
                >
                    {staticData.list}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Regular"
                    fontSize="0.8rem"
                    marginTop="2.3rem"
                    color="rgb(84,43,104)"
                >
                    {staticData.order}
                </TextArea>
            </InfoWrapper>
        </ContentWrapper>
    )
}