import React, {useState} from "react"

import styled from "styled-components"
import How from "../img/How3.png"
import MiniCard from "./MiniCard"
import Play from "../img/play.png"

const Container = styled.div `
display:flex;
height:100%;
@media only screen and (max-width:480px){
    flex-direction:column;
}
`
const Left = styled.div `
width:50%;
position:relative;
@media only screen and (max-width:480px){
    display:none;
}
`
const Image = styled.img`
width:60%;
margin-left: 100px;
display: ${(props)=>props.open && "none"};
`

const Video = styled.video `
display: ${(props)=>!props.open && "none"};
height:300px;
position:absolute;
top:0;
bottom:0;
right:0;
margin:auto;
@media only screen and (max-width:480px){
    width:100%;
}
`

const Right = styled.div `
width:50%;
@media only screen and (max-width:480px){
    width:100%;
}
`
const Wrapper = styled.div `
padding:50px;
display:flex;
flex-direction:column;
@media only screen and (max-width:480px){
    padding:20px;
    
}
`
const Title = styled.h1 `
`
const Desc = styled.p `
font-size:20px;
margin-top: 20px;
color:#555;
`
const CardContainer=styled.div `
display:flex;
justify-content: space-between;
margin-top:50px;
`
const Button = styled.button `
width: 180px;
border:none;
border-radius:10px;
background-color:darkblue;
color:white;
display:flex;
align-items:center;
font-size:20px;
padding:15px;
cursor:pointer;
margin-top: 50px;
`

const Icon = styled.img `
width: 20px;
margin-right: 10px;
`
const Modal = styled.div `
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5);
`
const CloseButton = styled.button `
position:absolute;
background-color:white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30%;
`
const CloseButtonO = styled.button `
position:absolute;
background-color:white;
padding:5px;
border:none;
border-radius:5px;
right:5px;
top:30%;
`

const Service = () => {
    const [open,setOpen]=useState(false)
    const smallScreen = window.screen.width <=480 ? true : false
    return (
        <Container>
            <Left>
                <Image open={open} src={How}/>
                <Video open={open} loop controls 
                src="https://www.youtube.com/watch?v=9_s_Essow6s"/>
                {open && <CloseButtonO onClick={()=>setOpen(false)}>Close</CloseButtonO>}
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa reiciendis esse, similique vel, soluta neque ut sunt tempora accusantium dolores. Exercitationem, provident commodi. Autem saepe iusto molestias atque debitis.</Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button onClick={()=>setOpen(true)}>                   
                    <Icon src={Play}/>How it works</Button>
                  
                </Wrapper>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video
                    open={open} loop controls 
                    src="https://www.youtube.com/watch?v=9_s_Essow6s"/>
                    <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service;