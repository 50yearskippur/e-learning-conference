import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Main from '../../static-media/Main.png';
import selectedMain from '../../static-media/SelectedMain.png';
import about from '../../static-media/about.png';
import selectedAbout from '../../static-media/selectedAbout.png';
import Schedule from '../../static-media/Schedule.png';
import selectedSchedule from '../../static-media/selectedSchedule.png';


const BarContainer = styled.div({
    width: "100%",
    height: "11%",
    backgroundColor: "rgba(255, 255,255, 0.5)",
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center'
})

const IconsContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between",
    width: "85%"
})

const Icon = styled.img({
    height: '4.6rem'
})

export default function Bar(){
    const [selectedIcon ,setSelected] = useState(3);
    const navigate = useNavigate();

    return(
        <BarContainer>
            <IconsContainer>
                <Icon 
                    src={selectedIcon === 1 ? selectedAbout : about} 
                    onClick={()=>{setSelected(1); navigate('/about-us')}}
                />
                <Icon 
                    src={selectedIcon === 3 ? 
                            selectedMain : Main} 
                    onClick={()=>{setSelected(3); navigate('/e-learning-conference')}}
                />
                <Icon 
                    src={selectedIcon === 2 ? 
                            selectedSchedule : Schedule} 
                    onClick={()=>{setSelected(2); navigate('/schedule')}}
                />
            </IconsContainer>
        </BarContainer>
    )
}