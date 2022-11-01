import React from "react";
import styled from "styled-components";
import { staticData } from "./staticData";

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop, textAlign})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: "white",
    textAlign: textAlign ? textAlign : "center",
    lineHeight: 2
}))

const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '70%',
    marginTop: '5rem',
    whiteSpace: 'pre-wrap'
})

const ScheduleWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%"
})

export default function Schedule(){
    return(
        <ContentWrapper>
            <ScheduleWrapper>
                <TextArea
                    fontSize="2rem"
                    fontFamily="Anomalia-demibold"
                >
                    {staticData.title}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.firstEvent.hour} 
                    </span>
                    {"    " + staticData.firstEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.secondEvent.hour} 
                    </span>
                    {"    " + staticData.secondEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.thirdEvent.hour} 
                    </span>
                    {"    " + staticData.thirdEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.fourthEvent.hour} 
                    </span>
                    {"    " + staticData.fourthEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.fithEvent.hour} 
                    </span>
                    {"    " + staticData.fithEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.sixthEvent.hour} 
                    </span>
                    {"    " + staticData.sixthEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.seventhEvent.hour} 
                    </span>
                    {"    " + staticData.seventhEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.eighthEvent.hour} 
                    </span>
                    {"    " + staticData.eighthEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.ninthEvent.hour} 
                    </span>
                    {"    " + staticData.ninthEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.tenthEvent.hour} 
                    </span>
                    {"    " + staticData.tenthEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.eleventhEvent.hour} 
                    </span>
                    {"    " + staticData.eleventhEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-light"
                    width='100%'
                    textAlign='right'
                    fontSize="0.9rem"
                >
                    <span
                        style={{
                            fontFamily: "Assistant-Regular"
                        }}
                    >
                        {staticData.twelveEvent.hour} 
                    </span>
                    {"    " + staticData.twelveEvent.event}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-SemiBold"
                    width='100%'
                    textAlign='right'
                    fontSize="1.2rem"
                >
                    {staticData.footerText}
                </TextArea>
            </ScheduleWrapper>
        </ContentWrapper>
    )
}