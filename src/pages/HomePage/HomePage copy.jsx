import React, {useState,useEffect} from "react";
import {useReactCountdown} from 'use-react-countdown'
import styled from "styled-components";
import {PageData, ScheduleData, ContactUs} from "./pageData copy.js";
import Button from "../../components/Button/Button.jsx";
import FlipCard from '../../components/FlipCard/FlipCard';
import Vr from '../../static-media/vr.png';
import Micro from '../../static-media/micro.png';
import AI from '../../static-media/AI.png';
import Workshop from '../../static-media/workshop.png';

const DATE_TILL_CONFERENCE = 'January 16, 2023 09:00:00'

const TextArea = styled.div(({fontSize, fontFamily, width, marginTop,textAlign,color})=>({
    fontSize,
    fontFamily,
    marginTop,
    width,
    color: color ? color : "white",
    textAlign: textAlign ? textAlign : "center"
}))

const ContentWrapper = styled.div({
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    height: '145rem',
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
    marginTop: "10rem"
})

const DigitContainer = styled.div({
    width: '25%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
})

const TopPartContainer = styled.div({
    marginTop: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
})

const ScheduleContainer = styled.div({
    marginTop: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
})

const PartContainer = styled.div({
    width: "85%",
    borderRadius: "3px",
    height: "5rem",
    marginTop: "1.5rem",
    boxShadow: "-3px 0px 47px 1px rgba(181,177,255,1)",
    webkitBoxShadow: "-3px 0px 47px 1px rgba(181,177,255,1)",
    mozBoxShadow: "3px 0px 47px 1px rgba(181,177,255,1)"
})

const ContactUsContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: '1.9rem'
})

const PartWrapper = styled.div({
    display: 'flex',
    height: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
})

const WithIconWrapper = styled.div({
    height: "100%",
    width: "100%"
})

export default function HomePage({scheduleRef}){
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
            <TopPartContainer>
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
                    fontSize="1.6rem"
                    marginTop="1.5rem"
                >
                    {PageData.locationInfo}
                </TextArea>
                <ButtonContainer>
                    <Button 
                        text={PageData.buttons.signUp}
                        type={true}
                        width="100%"
                        fontSize='1.3rem'
                        onClick={()=>{window.location.href = PageData.additionalInfo.signupForm}}
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
                            color="rgb(121,2,142)"
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
                            color="rgb(121,2,142)"
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
                            color="rgb(121,2,142)"
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
                            color="rgb(121,2,142)"
                        >
                            ימים
                        </TextArea>
                    </DigitContainer>
                </Countdown>
            </TopPartContainer>
            <ScheduleContainer
                ref={scheduleRef}
            >
                <TextArea
                    fontFamily="Anomalia-demibold"
                    fontSize='2rem'
                    color="rgb(76,1,94)"
                >
                    {
                        ScheduleData.title
                    }
                </TextArea>
                <PartContainer>
                    <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.firstEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.firstEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                    <WithIconWrapper>
                        <PartWrapper>
                                <TextArea
                                    color="rgb(76,1,94)"
                                    fontFamily="Assistant-SemiBold"
                                    fontSize="1.4rem"
                                >
                                    {
                                        ScheduleData.secondEvent.hour
                                    }
                                </TextArea>
                                <div
                                    style={{
                                        width: "95%",
                                        display: 'flex',
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <TextArea
                                        color="rgb(76,1,94)"
                                        fontFamily="Assistant-Light"
                                        fontSize="1.2rem"
                                    >
                                        {
                                            ScheduleData.secondEvent.event
                                        }
                                    </TextArea>
                                </div>
                        </PartWrapper>
                        <img 
                            src={Vr}
                            style={{
                                height: '4rem',
                                position: "relative",
                                left: "-14.6rem",
                                top: "-4.4rem"
                            }}
                            alt='vr'
                        />
                    </WithIconWrapper>
                </PartContainer>
                <PartContainer>
                <WithIconWrapper>
                        <PartWrapper>
                                <TextArea
                                    color="rgb(76,1,94)"
                                    fontFamily="Assistant-SemiBold"
                                    fontSize="1.4rem"
                                >
                                    {
                                        ScheduleData.thirdEvent.hour
                                    }
                                </TextArea>
                                <div
                                    style={{
                                        width: "95%",
                                        display: 'flex',
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <TextArea
                                        color="rgb(76,1,94)"
                                        fontFamily="Assistant-Light"
                                        fontSize="1.2rem"
                                    >
                                        {
                                            ScheduleData.thirdEvent.event
                                        }
                                    </TextArea>
                                </div>
                        </PartWrapper>
                        <img 
                            src={Micro}
                            style={{
                                height: '4rem',
                                position: "relative",
                                right: "0.3rem",
                                top: "-4.4rem"
                            }}
                            alt='microcopy'
                        />
                    </WithIconWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.fourthEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.fourthEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <WithIconWrapper>
                        <PartWrapper>
                                <TextArea
                                    color="rgb(76,1,94)"
                                    fontFamily="Assistant-SemiBold"
                                    fontSize="1.4rem"
                                >
                                    {
                                        ScheduleData.fithEvent.hour
                                    }
                                </TextArea>
                                <div
                                    style={{
                                        width: "95%",
                                        display: 'flex',
                                        justifyContent: "flex-start"
                                    }}
                                >
                                    <TextArea
                                        color="rgb(76,1,94)"
                                        fontFamily="Assistant-Light"
                                        fontSize="1.2rem"
                                    >
                                        {
                                            ScheduleData.fithEvent.event
                                        }
                                    </TextArea>
                                </div>
                        </PartWrapper>
                        <img 
                            src={AI}
                            style={{
                                height: '4rem',
                                position: "relative",
                                left: "-14.6rem",
                                top: "-4.4rem"
                            }}
                            alt='vr'
                        />
                    </WithIconWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.sixthEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.sixthEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.seventhEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.seventhEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.eighthEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.eighthEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.ninthEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.ninthEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <WithIconWrapper>
                        <PartWrapper>
                                <TextArea
                                    color="rgb(76,1,94)"
                                    fontFamily="Assistant-SemiBold"
                                    fontSize="1.4rem"
                                >
                                    {
                                        ScheduleData.tenthEvent.hour
                                    }
                                </TextArea>
                                <div
                                    style={{
                                        width: "95%",
                                        display: 'flex',
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <TextArea
                                        color="rgb(76,1,94)"
                                        fontFamily="Assistant-Light"
                                        fontSize="1.2rem"
                                    >
                                        {
                                            ScheduleData.tenthEvent.event
                                        }
                                    </TextArea>
                                </div>
                        </PartWrapper>
                        <img 
                            src={Workshop}
                            style={{
                                height: '4rem',
                                position: "relative",
                                right: "0.3rem",
                                top: "-4.4rem"
                            }}
                            alt='workshop'
                        />
                    </WithIconWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.eleventhEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.eleventhEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
                <PartContainer>
                <PartWrapper>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-SemiBold"
                            fontSize="1.4rem"
                        >
                            {
                                ScheduleData.twelveEvent.hour
                            }
                        </TextArea>
                        <TextArea
                            color="rgb(76,1,94)"
                            fontFamily="Assistant-Light"
                            fontSize="1.2rem"
                        >
                            {
                                ScheduleData.twelveEvent.event
                            }
                        </TextArea>
                    </PartWrapper>
                </PartContainer>
            </ScheduleContainer>
            <ContactUsContainer>
                <TextArea
                    fontFamily="Anomalia-Demibold"
                    fontSize="1.4rem"
                    color="rgb(76,1,94)"
                >
                    {ContactUs.title}
                </TextArea>
                <TextArea
                    fontFamily="Assistant-Regular"
                    fontSize="1rem"
                    color="rgb(76,1,94)"
                >
                    {ContactUs.invatation}
                </TextArea>
                <a
                    href={`mailto:${ContactUs.email}`}
                    style={{
                        textDecoration: "none",
                        color: 'rgb(54,103,208)',
                        fontSize: "1rem",
                        fontFamily: "Assistant-Regular"
                    }}
                >
                    {ContactUs.email}
                </a>
                <TextArea
                    fontFamily="Assistant-Regular"
                    fontSize="1rem"
                    color="rgb(76,1,94)"
                >
                    {ContactUs.gayasInfo}
                </TextArea>
            </ContactUsContainer>
        </ContentWrapper>
    )
}