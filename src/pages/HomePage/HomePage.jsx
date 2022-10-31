import React, {useState,useEffect} from "react";
import {useReactCountdown} from 'use-react-countdown'
import styled from "styled-components";
import {PageData} from "./pageData.js";
import Button from "../../components/Button/Button.jsx";
import FlipCard from '../../components/FlipCard/FlipCard';
import { useNavigate } from "react-router-dom";

const DATE_TILL_CONFERENCE = 'November 20, 2022 09:00:00'

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: "white",
    textAlign: "center"
}))

const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '70%',
    marginTop: '5.7rem',
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

export default function HomePage(){
    const {days, hours, minutes, seconds} = useReactCountdown(DATE_TILL_CONFERENCE);
    const [secondsShuffle, setSeconds] = useState(false);
    const [minutesShuffle, setMinutes] = useState(false);
    const [hoursShuffle, setHours] = useState(false);
    const [daysShuffle, setDays] = useState(false);
    const navigate = useNavigate();


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
                    text={PageData.buttons.moreInfo}
                    type={true}
                    width="100%"
                    fontSize='1.3rem'
                    onClick={()=>{navigate('/more-info')}}
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
        </ContentWrapper>
    )
}