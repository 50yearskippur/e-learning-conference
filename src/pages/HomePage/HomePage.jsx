import React, {useState,useEffect} from "react";
import {useReactCountdown} from 'use-react-countdown'
import styled from "styled-components";
import {PageData, StaticData} from "./pageData.js";
import Button from "../../components/Button/Button.jsx";
import FlipCard from '../../components/FlipCard/FlipCard';
import Date from '../../static-media/date.png';


const DATE_TILL_CONFERENCE = 'November 20, 2022 09:00:00'

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop,textAlign})=>({
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

const ButtonContainer = styled.div({
    display: 'flex',
    width: "60%",
    justifyContent: "center",
    marginTop: '1.5rem',
    flexWrap: "wrap"
})

const Countdown = styled.div({
    display: 'flex',
    width: "85%",
    marginTop: "1.8rem"
})

const DigitContainer = styled.div({
    width: '25%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const TitlesContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "1.5rem",
    width: "90%"
})

const ImgTitle = styled.img({
    width: '70%',
    marginTop: "3rem"
})


const Seperaor = styled.div({
    marginTop: "0.8rem"
})

export default function HomePage(){
    const {days, hours, minutes, seconds} = useReactCountdown(DATE_TILL_CONFERENCE);
    const [secondsShuffle, setSeconds] = useState(false);
    const [minutesShuffle, setMinutes] = useState(false);
    const [hoursShuffle, setHours] = useState(false);
    const [daysShuffle, setDays] = useState(false);


    useEffect(()=>{
        setSeconds(prev => !prev)
    },[seconds])

    useEffect(()=>{
        setMinutes(prev => !prev)
    },[minutes])

    useEffect(()=>{
        setHours(prev => !prev)
    },[hours])

    useEffect(()=>{
        setDays(prev => !prev)
    },[days])

    const openWaze = ()=>{
       window.location.href = PageData.additionalInfo.wazeNavigation;
    }

    const addToGCal = ()=>{
        window.location.href = PageData.additionalInfo.calendarEvent;
    }

    return(
        <ContentWrapper>
            <TextArea 
                fontFamily='Anomalia-demibold'
                fontSize="2rem"
            >
                {PageData.title}
            </TextArea>
            <TextArea
                fontFamily="Assistant-SemiBold"
                fontSize='1.3rem'
                marginTop="0.4rem"
            >
                {PageData.subTitle}
            </TextArea>
            <TextArea
                fontFamily="Assistant-Light"
                width="76%"
                marginTop='1rem'
            >
                {PageData.firstParagraph}
            </TextArea>
            <TextArea
                fontFamily="Assistant-SemiBold"
                fontSize="1.3rem"
                marginTop="1.5rem"
            >
                {PageData.locationInfo}
            </TextArea>
            <TextArea
                fontFamily="Assistant-light"
                fontSize='0.9rem'
                marginTop="1.5rem"
            >
                {PageData.pleaseRegister}
            </TextArea>
            <ButtonContainer>
                <Button 
                    text={PageData.buttons.signUp}
                    type={true}
                    width="100%"
                    fontSize='1.3rem'
                    onClick={()=>{}}
                />
                <Button 
                    text={PageData.buttons.openWaze}
                    type={false}
                    width="47.5%"
                    fontSize='1.1rem'
                    onClick={openWaze}
                    style={{marginTop: '5%', marginLeft: "2.5%"}}
                />
                <Button 
                    text={PageData.buttons.addToCalendar}
                    type={false}
                    width="47.5%"
                    fontSize='1.1rem'
                    onClick={addToGCal}
                    style={{marginTop: '5%', marginRight: '2.5%'}}
                />
            </ButtonContainer>
            <Countdown>
                <DigitContainer>
                    <FlipCard 
                        digit={seconds}
                        shuffle={secondsShuffle}
                    />
                    <TextArea
                        fontFamily='Anomalia-light'
                    >
                        שניות
                    </TextArea>
                </DigitContainer>
                <DigitContainer>
                    <FlipCard 
                        digit={minutes}
                        shuffle={minutesShuffle}
                    />
                    <TextArea
                        fontFamily='Anomalia-light'
                    >
                        דקות
                    </TextArea>
                </DigitContainer>
                <DigitContainer>
                    <FlipCard 
                        digit={hours}
                        unit="hours"
                        shuffle={hoursShuffle}
                    />
                    <TextArea
                        fontFamily='Anomalia-light'
                    >
                        שעות
                    </TextArea>
                </DigitContainer>
                <DigitContainer>
                    <FlipCard 
                        digit={days}
                        shuffle={daysShuffle}
                    />
                    <TextArea
                        fontFamily='Anomalia-light'
                    >
                        ימים
                    </TextArea>
                </DigitContainer>
            </Countdown>
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