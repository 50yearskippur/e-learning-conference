import React from "react";
import styled from "styled-components";
import Date from '../../static-media/date.png';
import { StaticData } from "./MoreInfoData";

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop, textAlign})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: "white",
    textAlign: textAlign ? textAlign : "center"
}))

const Seperaor = styled.div({
    marginTop: "0.8rem"
})

const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '70%',
    marginTop: '5.7rem',
    whiteSpace: 'pre-wrap'
})

const TitlesContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "1.5rem",
    width: "90%"
})

const ImgTitle = styled.img({
    width: '70%'
})

export default function moreInfo(){
    return (
        <ContentWrapper>
            <ImgTitle 
                src={Date}
            />
            <TextArea
                fontFamily="Assistant-Regular"
                marginTop='1.5rem'
                fontSize="0.95rem"
                width="95%"
            >
                {StaticData.introductionParagraph}
            </TextArea>
            <TextArea
                fontFamily="Assistant-Light"
                marginTop='1.2rem'
                fontSize="0.85rem"
                width="95%"
            >
                {StaticData.commanders}
            </TextArea>
            <TitlesContainer>
                <TextArea
                    fontFamily="Anomalia-demibold"
                    fontSize="1.5rem"
                >
                    {StaticData.titles.who}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Light"
                    fontSize="0.9rem"
                >
                    {StaticData.explanation.who}
                </TextArea>
                <Seperaor />
                <TextArea
                    fontFamily="Anomalia-demibold"
                    fontSize="1.5rem"
                >
                    {StaticData.titles.where}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Light"
                    fontSize="0.9rem"
                >
                    {StaticData.explanation.where}
                </TextArea>
                <Seperaor />
                <TextArea
                    fontFamily="Anomalia-demibold"
                    fontSize="1.5rem"
                >
                    {StaticData.titles.when}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Light"
                    fontSize="0.9rem"
                    textAlign="right"
                >
                    {StaticData.explanation.when}
                </TextArea>
                <Seperaor />
                <TextArea
                    fontFamily="Anomalia-demibold"
                    fontSize="1.5rem"
                >
                    {StaticData.titles.moreInfo}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Light"
                    fontSize="0.9rem"
                    textAlign="right"
                >
                    {StaticData.explanation.moreInfoPartOne}
                    <a 
                        href={`mailTo: ${StaticData.explanation.moreInfoPartTwo}`}
                        style={{
                            textDecoration: "none",
                            color: "#3ca6d8"
                        }}
                    >
                        {StaticData.explanation.moreInfoPartTwo}
                    </a>
                    {StaticData.explanation.moreInfoPartThree}
                </TextArea>
            </TitlesContainer>
        </ContentWrapper>
    )
}