import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";

const Mars = () => {
  return (
    <>
    <Container>
      <Header/>
      <MainContainer>
      <MinorContainer>
        <UnOrderedList>
          <ListItems>Atmosphere</ListItems>
          <Paragraph>Mars has a thin atmosphere consisting mainly of carbon dioxide (95.3%), with traces of nitrogen (2.7%) and argon (1.6%). The thin atmosphere results in a much colder climate compared to Earth.</Paragraph>
          <ListItems>Day Length</ListItems>
          <Paragraph>A day on Mars, known as a sol, is approximately 24 hours, 37 minutes, and 22 seconds long</Paragraph>
        </UnOrderedList>
      </MinorContainer>
      <MinorContainer>
        <Image src="images/Mars.png"/>
        <MainHeading>Mars</MainHeading>
        <SubHeading>The Red Planet</SubHeading>
      </MinorContainer>
      <MinorContainer>
        <UnOrderedList>
          <ListItems>Valles Marineris</ListItems>
          <Paragraph> One of the largest canyons in the solar system, stretching over 2,500 miles long and reaching depths of up to 6 miles</Paragraph>
          <ListItems>Olympus Mons</ListItems>
          <Paragraph>The largest volcano and tallest known volcano in the solar system, standing at about 13.6 miles high</Paragraph>
          <ListItems>Polar Ice Caps</ListItems>
          <Paragraph>Mars has ice caps at its poles, composed of a mixture of water ice and carbon dioxide ice</Paragraph>
          <ListItems>Mount Sharp</ListItems>
          <Paragraph>A mountain located in the center of Gale Crater, offering a layered geological record of Mars' past</Paragraph>
        </UnOrderedList>
      </MinorContainer>
      </MainContainer>
      <MainContainer>
      <MinorContainerFooter>
        <IconImage src="images/EarthIcon.png"/>
        <ButtonLink to="/earth"> ⇦ Earth</ButtonLink>
      </MinorContainerFooter>
      <MinorContainerFooter>
        <Button>Start Tour </Button>
      </MinorContainerFooter>
      <MinorContainerFooter>
      <IconImage src="images/JupiterIcon.png"/>
        <ButtonLink to="/jupiter">Jupiter ⇨ </ButtonLink>
      </MinorContainerFooter>
      </MainContainer>
    </Container>
    </>
  )
}

const Container = styled.div`
background-color:black;
background-image: url("images/bkgp.jpg");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
height: 100vh;
overflow: auto;
`;

const Image = styled.img`
z-index:-1;
`;

const IconImage = styled.img`
height:5em;
width:5em;
margin-bottom:0;
`;
const MainContainer = styled.div`
display:flex;
width:100%;
`;


const MinorContainer = styled.div`
width:100%;
`;


const MinorContainerFooter = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const UnOrderedList=styled.ul`
margin-left:1em;
margin-right:1em;

`;

const ListItems=styled.li`
font-weight:bold;
font-size:20px;
margin-top:2em;
`;

const MainHeading=styled.h1`
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;
const SubHeading=styled.h3`
position:absolute;
top:55%;
left:50%;
transform: translate(-50%, -50%);`;

const Paragraph=styled.p`
margin-top:0.5em;
margin-left:1em;
`;

const Button=styled.button`
width:15rem;
height:3rem;
padding:0.5rem 1rem;
display:inline;
display:flex;
justify-content: center;
align-items:center;
background-color:transparent;
color:white;
position:absolute;
bottom:5%;
left:50%;
transform: translate(-50%, -50%);
border: 2px solid white;
border-radius:25px;
font-weight:bolder;
font-size:1.5em;

&:hover {
  background-color: #fff;
  color:#000;
  cursor:pointer;
}



`;

const ButtonLink = styled(Link)`
top:25rem;
padding:0.5em 1em;
text-decoration: none;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
display: flex;
justify-content: center;
align-items: center;
margin-bottom:1em;
background-color:transparent;
color:#fff;
&:hover {
  text-decoration:underline;
  text-decoration-thickness:2px;
  cursor:pointer;
}
`;

export default Mars