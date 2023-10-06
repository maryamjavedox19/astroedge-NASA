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
                    <ListItems>Mount Sharp</ListItems>
          <Paragraph>A mountain located in the center of Gale Crater, offering a layered geological record of Mars' past</Paragraph>
        </UnOrderedList>
      </MinorContainer>
      <MinorContainer>
        {/*<Image src="images/Mars.png"/>*/}
        
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
background-image: url("images/mars bg.jpg");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
height: 100vh;
overflow: auto;

`;
/*
const Image = styled.img`
z-index:-1;
`;
*/

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
margin-left:3em;
margin-right:3em;
list-style:none;
`;

const ListItems=styled.li`
font-family: 'Poppins', sans-serif;
font-weight:bolder;
font-size:1.5em;
margin-top:1.5em;
text-shadow: 4px 2px 1px #222;
`;

const MainHeading=styled.h1`
font-family: 'Raleway Dots', 'Poppins';
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
font-size:10em;
font-weight:bolder;
text-shadow: 4px 2px 1px rgba(71, 68, 70, 0.99),-8px 6px 12px rgba(199, 92, 60, 1);
`;
const SubHeading=styled.h3`
font-family: 'Rajdhani','Poppins', sans-serif;
position:absolute;
bottom:15%;
left:50%;
transform: translate(-50%, -50%);
font-size:3em;
font-weight:bolder;
text-shadow: 4px 2px 1px rgba(71, 68, 70, 0.99),-8px 6px 12px rgba(199, 92, 60, 1);
`;


const Paragraph=styled.p`
font-family: 'Poppins', sans-serif;
font-weight:300;
margin-top:0.5em;
margin-left:1em;
font-size:1em;
text-shadow: 4px 2px 1px #222;
`;

const Button=styled.button`
font-family: 'Poppins', sans-serif;
box-shadow: 7px 7px 8px 4px rgba(54, 54, 54, 0.83);
text-shadow: 4px 2px 1px #222;
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
  text-shadow: 3px 2px 4px rgba(122, 123, 123, 1);
}



`;

const ButtonLink = styled(Link)`
font-family: 'Poppins', sans-serif;
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
font-size:2em;
text-shadow: 4px 2px 1px #000;
&:hover {
  text-decoration:underline;
  text-decoration-thickness:2px;
  cursor:pointer;
}
`;

export default Mars