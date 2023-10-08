import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";
import { JupiterDataLeft, JupiterDataRight } from "./PlanetData";
const Jupiter = () => {
  const DataLeft = JupiterDataLeft.map(data => {
    return (
      <>
        <ListItems>{data.heading}</ListItems>
        <Paragraph>{data.paragraph}</Paragraph>
      </>
    )
  })

  const DataRight = JupiterDataRight.map(data => {
    return (
      <>
        <ListItems>{data.heading}</ListItems>
        <Paragraph>{data.paragraph}</Paragraph>
      </>
    )
  })

  return (
    <>
      <Container>
        <Header />
        <MainContainer>
          <MinorContainer>
            <UnOrderedList>{DataLeft}</UnOrderedList>
          </MinorContainer>
          <MinorContainer>
            {/*<Image src="images/Mars.png"/>*/}

            <MainHeading>Jupiter</MainHeading>
            <SubHeading>A Gigantic World of Moons</SubHeading>
          </MinorContainer>
          <MinorContainer>
            <UnOrderedList>{DataRight}</UnOrderedList>
          </MinorContainer>
        </MainContainer>
        <MainContainer>
          <MinorContainerFooter>
            <IconImage src="images/MarsIcon.png" />
            <ButtonLink to="/mars"> ⇦ Mars</ButtonLink>

          </MinorContainerFooter>
          <MinorContainerFooter>
          </MinorContainerFooter>
          <MinorContainerFooter>
            <IconImage src="images/SaturnIcon.png" style={{ height: "6.2em", width: "6.2em" }} />
            <ButtonLink to="/saturn">Saturn ⇨</ButtonLink>
          </MinorContainerFooter>
        </MainContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
background-color:black;
background-image: url("images/jupiter bg.jpg");
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
margin-bottom:none;
height:fit-content;
`;
const MainContainer = styled.div`
display:flex;
width:100%;
height:fit-content;
margin-bottom:0;

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
gap:0px;
`;

const UnOrderedList = styled.ul`
margin-left:3em;
margin-right:3em;
list-style:none;
`;

const ListItems = styled.li`
font-family: 'Poppins', sans-serif;
font-weight:bolder;
font-size:1.35em;
margin-top:1.5em;
text-shadow: 5px 2px 5px rgba(34, 34, 34, 1),-4px 4px 16px rgb(255,234,172);
`;

const MainHeading = styled.h1`
font-family: 'Raleway Dots', 'Poppins';
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
font-size:10em;
font-weight:bolder;
text-shadow: 5px 2px 5px rgba(34, 34, 34, 1),-4px 4px 16px rgb(175,100,31);
`;
const SubHeading = styled.h3`
font-family: 'Rajdhani','Poppins', sans-serif;
position:absolute;
bottom:25%;
left:50%;
transform: translate(-50%, -50%);
font-size:3em;
font-weight:bolder;
text-shadow: 5px 2px 5px rgba(34, 34, 34, 1),-4px 4px 16px rgb(175,100,31);
`;


const Paragraph = styled.p`
font-family: 'Poppins', sans-serif;
font-weight:bold;
margin-top:0.5em;
margin-left:1em;
font-size:1em;
text-shadow: 5px 2px 5px rgba(34, 34, 34, 1),-4px 4px 16px rgb(175,100,31);
`;

const Button = styled.button`
font-family: 'Poppins', sans-serif;
text-shadow: 10px 7px 17px rgba(34, 34, 34, 1),-4px 12px 24px rgb(175,100,31);
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
box-shadow: 10px 3px 15px -3px rgba(253, 228, 165, 1);
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
padding:0em 1em;
text-decoration: none;
border: none;
cursor: pointer;
transition: background-color 0.3s ease-in-out;
margin-bottom:0;
background-color:transparent;
color:#fff;
font-size:2em;

text-shadow: 5px 2px 5px rgba(34, 34, 34, 1),-4px 4px 16px rgb(255,234,172);
&:hover {
  text-decoration:underline;
  text-decoration-thickness:2px;
  cursor:pointer;
}
`;

export default Jupiter