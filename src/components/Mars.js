import React from "react";
import styled from "styled-components";
import Header from "./Header";
//import { Link } from "react-router-dom";

const Mars = () => {
  return (
    <>
    <Container>
      <Header/>
      <MainContainer>
      <MinorContainer>
        <ul>
          <li>Atmosphere</li>
          <li>Day Length</li>
        </ul>
      </MinorContainer>
      <MinorContainer>
        <Image src="images/Mars.png"/>
        <h1>Mars</h1>
        <h3>The Red Planet</h3>
        <button>Start Tour</button>
      </MinorContainer>
      <MinorContainer>
        <ul>
          <li>Valles Marineris</li>
          <li>Olympus Mons</li>
          <li>Polar Ice Caps</li>
          <li>Mount Sharp</li>
        </ul>
      </MinorContainer>
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
`;

const MainContainer = styled.div`
display:flex;
width:100%;
`;

const MinorContainer = styled.div`
width:100%;

`;
export default Mars