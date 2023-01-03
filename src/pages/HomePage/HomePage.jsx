import React, { useState, useEffect } from "react";
import { useReactCountdown } from "use-react-countdown";
import styled from "styled-components";
import { PageData, ScheduleData, ContactUs } from "./pageData.js";
import Button from "../../components/Button/Button.jsx";
import FlipCard from "../../components/FlipCard/FlipCard";

const DATE_TILL_CONFERENCE = "January 16, 2023 09:00:00";

const TextArea = styled.div(({ flip, fontSize, fontFamily, width, marginTop, marginBottom, textAlign, color }) => ({
    fontSize,
    fontFamily,
    marginTop,
    marginBottom,
    width,
    direction: flip ? "ltr" : "rtl",
    color: color ? color : "white",
    textAlign: textAlign ? textAlign : "center",
    "@media (max-width: 350px)": {
        padding: "1%",
        fontSize: `calc(${fontSize} - 0.2rem)`,
    },
}));

const ContentWrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "145rem",
    whiteSpace: "pre-wrap",
});

const ButtonContainer = styled.div({
    display: "flex",
    width: "60%",
    justifyContent: "center",
    marginTop: "1.5rem",
    flexWrap: "wrap",
});

const Countdown = styled.div({
    display: "flex",
    width: "85%",
    // marginTop: "23%",
    marginTop: "8.2rem",
});

const DigitContainer = styled.div({
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

const TopPartContainer = styled.div({
    marginTop: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
});

const ScheduleContainer = styled.div({
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
});

const PartContainer = styled.div({
    width: "85%",
    borderRadius: "3px",
    maxWidth: "310px",
    height: "fit-content",
    marginTop: "1.5rem",
    boxShadow: "-3px 0px 47px 1px rgba(181,177,255,1)",
    webkitBoxShadow: "-3px 0px 47px 1px rgba(181,177,255,1)",
    mozBoxShadow: "3px 0px 47px 1px rgba(181,177,255,1)",
});

const ContactUsContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
});

const PartWrapper = styled.div({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.5rem",
});

const WithIconWrapper = styled.div({
    height: "100%",
    width: "100%",
});

const eventsArray = Object.values(ScheduleData).slice(1);

export default function HomePage({ scheduleRef }) {
    const { days, hours, minutes, seconds } = useReactCountdown(DATE_TILL_CONFERENCE);
    const [secondsShuffle, setSeconds] = useState(false);
    const [minutesShuffle, setMinutes] = useState(false);
    const [hoursShuffle, setHours] = useState(false);
    const [daysShuffle, setDays] = useState(false);

    useEffect(() => {
        setSeconds((prev) => !prev);
    }, [seconds]);

    useEffect(() => {
        setMinutes((prev) => !prev);
    }, [minutes]);

    useEffect(() => {
        setHours((prev) => !prev);
    }, [hours]);

    useEffect(() => {
        setDays((prev) => !prev);
    }, [days]);

    const openWaze = () => {
        window.location.href = PageData.additionalInfo.wazeNavigation;
    };

    const addToGCal = () => {
        window.location.href = PageData.additionalInfo.calendarEvent;
    };

    // <div style={{ height: "100%", width: "100%", display: "none" }}>
    //     <TextArea fontFamily="Assistant-SemiBold" fontSize="1.6rem" marginTop="0.4rem">
    //         {PageData.subTitle}
    //     </TextArea>
    // </div>
    return (
        <ContentWrapper>
            <TopPartContainer>
                <TextArea fontFamily="Anomalia-demibold" fontSize="2rem">
                    {PageData.title}
                </TextArea>
                <TextArea fontFamily="Assistant-Light" width="76%" marginTop="1rem">
                    {PageData.firstParagraph}
                </TextArea>
                <TextArea fontFamily="Assistant-SemiBold" fontSize="1.6rem" marginTop="1.5rem">
                    {PageData.locationInfo}
                </TextArea>
                <ButtonContainer>
                    <Button
                        text={PageData.buttons.signUp}
                        type={true}
                        width="100%"
                        fontSize="1.3rem"
                        onClick={() => {
                            window.location.href = PageData.additionalInfo.signupForm;
                        }}
                    />
                    <Button text={PageData.buttons.openWaze} type={false} width="47.5%" fontSize="1rem" onClick={openWaze} style={{ marginTop: "5%", marginLeft: "2.5%" }} />
                    <Button text={PageData.buttons.addToCalendar} type={false} width="47.5%" fontSize="1rem" onClick={addToGCal} style={{ marginTop: "5%", marginRight: "2.5%" }} />
                </ButtonContainer>
                <Countdown>
                    <DigitContainer>
                        <FlipCard digit={seconds} shuffle={secondsShuffle} />
                        <TextArea fontFamily="Anomalia-light" color="rgb(121,2,142)">
                            שניות
                        </TextArea>
                    </DigitContainer>
                    <DigitContainer>
                        <FlipCard digit={minutes} shuffle={minutesShuffle} />
                        <TextArea fontFamily="Anomalia-light" color="rgb(121,2,142)">
                            דקות
                        </TextArea>
                    </DigitContainer>
                    <DigitContainer>
                        <FlipCard digit={hours} unit="hours" shuffle={hoursShuffle} />
                        <TextArea fontFamily="Anomalia-light" color="rgb(121,2,142)">
                            שעות
                        </TextArea>
                    </DigitContainer>
                    <DigitContainer>
                        <FlipCard digit={days} shuffle={daysShuffle} />
                        <TextArea fontFamily="Anomalia-light" color="rgb(121,2,142)">
                            ימים
                        </TextArea>
                    </DigitContainer>
                </Countdown>
            </TopPartContainer>
            <ScheduleContainer ref={scheduleRef}>
                <TextArea fontFamily="Anomalia-demibold" fontSize="2rem" color="rgb(76,1,94)">
                    {ScheduleData.title}
                </TextArea>
                {eventsArray.map((itm, idx) => (
                    <PartContainer key={idx + 1}>
                        {!itm?.image ? (
                            <PartWrapper>
                                <TextArea color="rgb(76,1,94)" fontFamily="Assistant-SemiBold" fontSize="1.4rem" flip>
                                    {itm.hour}
                                </TextArea>
                                {Object.values(itm.texts).map((txt, idx2) => (
                                    <>
                                        {txt === "break" ? (
                                            <hr key={idx2 + 30} style={{ width: "83%", height: "1px", border: 0, borderTop: "1px solid rgb(76,1,94)" }} />
                                        ) : (
                                            <TextArea key={idx2 + 30} color="rgb(76,1,94)" fontFamily="Assistant-Light" fontSize="1.2rem" width="90%">
                                                {txt}
                                            </TextArea>
                                        )}
                                    </>
                                ))}
                            </PartWrapper>
                        ) : (
                            <WithIconWrapper>
                                <PartWrapper>
                                    <TextArea color="rgb(76,1,94)" fontFamily="Assistant-SemiBold" fontSize="1.4rem" flip>
                                        {itm.hour}
                                    </TextArea>
                                    <div style={{ position: "relative", width: 0, height: 0 }}>
                                        <img src={itm.image.src} style={itm.image.style} alt={itm.image.alt} />
                                    </div>
                                    <div style={{ width: "95%", display: "flex", flexFlow: "column nowrap", justifyContent: itm.image.justify ?? "flex-start" }}>
                                        {Object.values(itm.texts).map((txt, idx2) => (
                                            <>
                                                {txt === "break" ? (
                                                    <hr key={idx2 + 30} style={{ width: "83%", height: "1px", border: 0, borderTop: "1px solid rgb(76,1,94)" }} />
                                                ) : (
                                                    <TextArea key={idx2 + 30} color="rgb(76,1,94)" fontFamily="Assistant-Light" fontSize="1.2rem">
                                                        {txt}
                                                    </TextArea>
                                                )}
                                            </>
                                        ))}
                                    </div>
                                </PartWrapper>
                            </WithIconWrapper>
                        )}
                    </PartContainer>
                ))}
            </ScheduleContainer>
            <ContactUsContainer>
                <TextArea fontFamily="Anomalia-Demibold" fontSize="1.4rem" color="rgb(76,1,94)">
                    {ContactUs.title}
                </TextArea>
                <TextArea fontFamily="Assistant-Regular" fontSize="1rem" color="rgb(76,1,94)">
                    {ContactUs.invatation}
                </TextArea>
                <a
                    href={`mailto:${ContactUs.email}`}
                    style={{
                        textDecoration: "none",
                        color: "rgb(54,103,208)",
                        fontSize: "1rem",
                        fontFamily: "Assistant-Regular",
                    }}
                >
                    {ContactUs.email}
                </a>
                <TextArea fontFamily="Assistant-Regular" fontSize="1rem" color="rgb(76,1,94)">
                    {ContactUs.gayasInfoHTML}
                </TextArea>
            </ContactUsContainer>
        </ContentWrapper>
    );
}
