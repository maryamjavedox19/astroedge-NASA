import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";

function Planets() {
  return (
    <>
      <Container>
        <Header />
        <Heading>
          <h3>
            Choose your destination and experience the beauty of space.
          </h3>
        </Heading>

        <ImageGrid>
          <ImageContainer>
            <Image src="images/mercury.jpg" alt="Image 2" />
            <ButtonLink to="/mercury">MERCURY</ButtonLink>
          </ImageContainer>
          <ImageContainer>

            <Image src="images/earth.jpg" alt="Image 2" />
            <ButtonLink to="/earth">EARTH</ButtonLink>


          </ImageContainer>


          <ImageContainer>
            <Image src="images/venus.jpg" alt="Image 2" />
            <ButtonLink to="/venus">VENUS</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/mars.jpg" alt="Image 2" />
            <ButtonLink to="/mars">MARS</ButtonLink>
          </ImageContainer>
          <SpecialImageContainer>
            <Image src="images/astro.png" alt="Image 2" />
          </SpecialImageContainer>
          <ImageContainer>
            <Image src="images/jupiter.jpg" alt="Image 2" />
            <ButtonLink to="/jupiter">JUPITER</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/saturn.jpg" alt="Image 2" />
            <ButtonLink to="/saturn">SATURN</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/uranus.jpg" alt="Image 2" />
            <ButtonLink to="/uranus">URANUS</ButtonLink>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/neptune.jpg" alt="Image 2" />
            <ButtonLink to="/neptune">NEPTUNE</ButtonLink>
          </ImageContainer>
        </ImageGrid>
      </Container>
    </>
  );
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

const Heading = styled.div`
h3{
  font-family: 'Josefin Sans', sans-serif;
    padding-top:3.3rem;
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    color:#A9A9A9
}
`

const ImageGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom:7rem;
  margin-top:1.1rem;

`;

const ImageContainer = styled.div`
position: relative;
display:flex;
flex-direction:column;
align-items: center;
`;

const SpecialImageContainer = styled(ImageContainer)`
bottom:5rem;
`

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

const ButtonLink = styled(Link)`
  top:25rem;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:1.2rem;
  margin-bottom:1.5rem;
  background-color:transparent;
  border:1px solid #5c5470;
  color:#DCDCDC;



  &:hover {
    background-color: #5c5470;
    cursor:pointer;
  }
`;


export default Planets;