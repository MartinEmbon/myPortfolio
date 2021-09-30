import styled from "styled-components"
import Phone from "../img/phone3.png"
import AnimatedShapes from "./AnimatedShapes"

const Container = styled.div `
display:flex;
@media only screen and (max-width:480px){
    flex-direction:column;
    padding:30px 20px;
}
`
const Left = styled.div `
width:50%;
@media only screen and (max-width:480px){
    display:none;
}
`

const Image = styled.img `
width:80%;
`

const Title = styled.span `
font-size: 70px;
@media only screen and (max-width:480px){
    font-size:50px;
}
`
const Subtitle = styled.span `
font-size: 24px;
font-style: italic;
color:#333;
margin-top:30px;
`
const Desc = styled.p `
font-size: 20px;
color:#777;
margin-top: 30px;
`
const Button = styled.button `
width: 150px;
border:none;
padding:15px 20px;
background-color:darkblue;
color:white;
border-radius:20px;
font-size: 20px;
cursor:pointer;
margin-top: 20px;
`


const Right = styled.div `
width:50%;
display: inline;;
flex-direction:column;
justify-content:center;
@media only screen and (max-width:480px){
    width:100%;
}
`


const Feature = () => {
    return ( 
        <Container>
            <Left><Image src={Phone}/></Left>
            <Right>
                <Title>
                    <b>good</b>design<br/>                    
                    <b>good</b>business
                </Title>
                <Subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse mollitia laborum libero omnis possimus? Enim voluptatem provident asperiores natus quisquam!</Subtitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas doloribus, alias cum molestias corporis soluta hic autem, maiores quidem ab iusto, harum animi assumenda aperiam rem! Atque, expedita accusantium?</Desc>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptas doloribus, alias cum molestias corporis soluta hic autem, maiores quidem ab iusto, harum animi assumenda aperiam rem! Atque, expedita accusantium?</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
     );
}
 
export default Feature;