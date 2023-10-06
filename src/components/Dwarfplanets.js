import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Link } from "react-router-dom";

function Dwarfplanets() {
  return (
    <>
      <Container>
        <Header />
        <Heading>
          <h1>DWARF PLANETS</h1>
          <h3>"Get Ready for the Ultimate Dwarf Planet Expedition"</h3>
        </Heading>

        <ImageGrid>
          <ImageContainer>
            <Image src="images/eris.png" alt="Image 2" />
            <Button>ERIS</Button>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/makemake.png" alt="Image 2" />
            <Button>MAKEMAKE</Button>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/pluto.png" alt="Image 2" />
            <Button>PLUTO</Button>
          </ImageContainer>
          <ImageContainer>
            <Image src="images/haumea.png" alt="Image 2" />
            <Button>HAUMEA</Button>
          </ImageContainer>
        </ImageGrid>

        <PlanetSection>
          <h1>Eris</h1>
          <PlanetContent>
            <PlanetDescription>
              <ul>
                <li>
                  Eris was thought to be the <GreyText>largest</GreyText> of the
                  dwarf planets.
                </li>
                <li>
                  However later discoveries showed it to be smaller than pluto.
                </li>
                <li>
                  It takes <GreyText>557 years</GreyText> for Eris to orbit the
                  sun.
                </li>
                <li>
                  The surface of Eris is likely <GreyText>nitrogen</GreyText>{" "}
                  and <GreyText>methane-rich</GreyText>.
                </li>
                <li>
                  At its farthest point from the sun, a point that is also
                  called its aphelion.
                </li>
                <li>
                  Eris and its satellite <GreyText>Dysmonia</GreyText> travel
                  far beyond the Kuiper Belt.
                </li>
                <li>
                  Eris is about <GreyText>two thirds</GreyText> of the Moon’s
                  diameter
                </li>
                <li>Standing on Eris would make a person feel lighter</li>
                <li>
                  As its <GreyText>gravity</GreyText> is 11 times weaker than
                  that of Earth
                </li>
                <li>
                  It is speculated to be made completely out of{" "}
                  <GreyText>ice</GreyText>.
                </li>
                <li>
                  Dysnomia is the second known <GreyText>largest moon</GreyText>{" "}
                  of a dwarf planet
                </li>
              </ul>
            </PlanetDescription>
            <PlanetImage src="images/erismoons.jpeg" alt="Eris" />
          </PlanetContent>
        </PlanetSection>

        <PlanetSection>
          <h1>HAUMEA</h1>
          <PlanetContent>
            <PlanetImage src="images/haumea2.png" alt="Eris" />
            <PlanetDescription>
              <ul>
                <li>
                  Haumea is the most recently named dwarf planets in the solar
                  system.
                </li>
                <li>
                  Haumea is unique because of its <PinkText>ellipsoid</PinkText>{" "}
                  shape.
                </li>
                <li>
                  Its mass is about <PinkText>one-third</PinkText> that of
                  Pluto.
                </li>
                <li>
                  The cigar-shaped dwarf planet rotates on its axis every{" "}
                  <PinkText>four</PinkText> hours.
                </li>
                <li>
                  The odd object also hosts a <PinkText>red spot</PinkText> and
                  a layer of crystalline ice.
                </li>
                <li>
                  Haumea is the only object in the Kuiper belt other than Pluto
                  known to host more than <PinkText>one moon</PinkText>.
                </li>
                <li>
                  It just meeting the hydrostatic equilibrium criteria for dwarf
                  planet status.
                </li>
              </ul>
            </PlanetDescription>
          </PlanetContent>
        </PlanetSection>

        <PlanetSection>
          <h1>MAKEMAKE</h1>
          <PlanetContent>
            <PlanetDescription>
              <ul>
                <li>
                  Makemake is also the most recently named dwarf planets in the
                  solar system.
                </li>
                <li>
                  Its diameter is known to be about{" "}
                  <PurpleText>two-thirds</PurpleText> that of Pluto.
                </li>
                <li>
                  A <PurpleText>moon</PurpleText> was discovered around Makemake
                  in 2016.
                </li>
                <li>
                  More than a decade after the dwarf planet itself was found.
                </li>
                <li>
                  Makemake is the <PurpleText>second-brightest</PurpleText>{" "}
                  object in the Kuiper Belt as seen from Earth
                </li>
                <li>
                  It takes about <PurpleText>305 Earth years</PurpleText> for
                  this dwarf planet to make one trip around the Sun.
                </li>
                <li>
                  The surface of Makemake is extremely{" "}
                  <PurpleText>cold</PurpleText>.
                </li>
              </ul>
            </PlanetDescription>
            <PlanetImage src="images/Makemake.jpeg" alt="Eris" />
          </PlanetContent>
        </PlanetSection>

        <PlanetSection>
          <h1>PLUTO</h1>
          <PlanetContent>
            <PlanetImage src="images/pluto3.png" alt="Eris" />
            <PlanetDescription>
              <ul>
                <li>
                  Pluto's heart-shaped glacier is about the size of Texas and
                  Oklahoma.
                </li>
                <li>
                  The surface is extremely <BlueText>cold</BlueText>.
                </li>
                <li>
                  <BlueText>Size and Distance:</BlueText> It has a radius of 715
                  miles (1,151 kilometers).
                </li>
                <li>
                  Pluto is about <BlueText>1/6</BlueText> the width of Earth.
                </li>
                <li>
                  One day on Pluto takes about <BlueText>153</BlueText> hours.
                </li>
                <li>
                  Pluto is <BlueText>39</BlueText> astronomical units away from
                  the Sun.
                </li>
                <li>
                  It takes sunlight <BlueText>5.5</BlueText> hours to travel
                  from the Sun to Pluto.
                </li>
                <li>
                  <BlueText>Moons:</BlueText> Pluto has five known moons:
                  Charon, Nix, Hydra, Kerberos, and Styx.
                </li>
                <li>
                  Pluto and Charon are just <BlueText>12,200 miles </BlueText>{" "}
                  (19,640 km) apart.
                </li>
                <li>
                  Nix and Hydra are two to three times farther away from Pluto
                  than Charon.
                </li>
                <li>
                  <BlueText>Hydra</BlueText> has a shape resembling a mitten or
                  a rubber duck with at least two large craters.
                </li>
                <li>
                  The irregularly shaped Nix looks much like a{" "}
                  <BlueText>jellybean</BlueText>.
                </li>
                <li>
                  <BlueText>Kerberos</BlueText> orbits between Nix and Hydra.
                </li>
                <li>
                  <BlueText>Styx</BlueText> is estimated to be irregular in
                  shape and 4.5 miles (7 km) wide.
                </li>
                <li>
                  <BlueText>Surface:</BlueText> Pluto's surface is characterized
                  by mountains, valleys, plains, and craters.
                </li>
                <li>
                  <BlueText>Tallest mountains</BlueText> are 6,500 to 9,800 feet
                  (2 to 3 kilometers) in height.
                </li>
                <li>
                  They are big blocks of water ice, usually coated with frozen
                  gases like methane.
                </li>
                <li>
                  <BlueText>Long troughs</BlueText> and{" "}
                  <BlueText>valleys</BlueText> are long as 370 miles (600
                  kilometers).
                </li>
                <li>
                  <BlueText>Craters</BlueText> as large as 162 miles (260
                  kilometers) in diameter dot.
                </li>
                <li>Some showing signs of erosion and filling.</li>
                <li>
                  This suggests tectonic forces are slowly resurfacing Pluto.
                </li>
                <li>
                  The most prominent plains observed on Pluto appear to be made
                  of <BlueText>frozen nitrogen</BlueText> gas.
                </li>
                <li>
                  <BlueText>Atmosphere:</BlueText> It’s similar to a comet. The
                  main constituent is molecular nitrogen.
                </li>
                <li>
                  Though molecules of methane and carbon monoxide have also been
                  detected.
                </li>
              </ul>
            </PlanetDescription>
          </PlanetContent>
        </PlanetSection>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: black;
  background-image: url("images/g4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const Heading = styled.div`
  h1 {
    font-family: "Work Sans", sans-serif;
    padding-top: 2.5rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #a9a9a9;
  }

  h3 {
    font-family: "Josefin Sans", sans-serif;
    padding-top: 2rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #a9a9a9;
  }
`;

const ImageGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 7rem;
  margin-top: 1.1rem;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  &:hover {
    img {
      transform: translateY(-15px);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 75%;
  transition: transform 0.3s ease;
`;

const Button = styled.button`
  top: 25rem;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
  background-color: transparent;
  border: 1px solid #53a8b6;
  font-size: 1.2rem;
  color: #dcdcdc;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #53a8b6;
    cursor: pointer;
  }
`;

const PlanetSection = styled.div`
  padding: 20px;

  h1 {
    font-size: 3rem;
    text-align: center;
    //color: #5585b5;
    color: #906387;
    margin-bottom: 1rem;
  }
`;

const PlanetContent = styled.div`
  display: flex;
  flex-direction: row;
  // margin-left: 1rem;
  align-items: center;
  justify-content: center;
`;

const PlanetDescription = styled.div`
  font-size: 1.3rem;
  margin-top: -5rem;

  margin-bottom: 1rem;
  margin-right: 5rem;
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 0;
    margin-bottom: 0;
    color: #a9a9a9;
  }
  li {
    margin-left: 0;
    white-space: pre-wrap;
  }
`;

const PlanetImage = styled.img`
  width: 35%;
  height: auto;
  margin-left: 5rem;
  margin-right: 3rem;
`;

const BlueText = styled.span`
  color: #53a8b6;
  font-weight: bold;
`;

const PurpleText = styled.span`
  color: #975a5e;
  font-weight: bold;
`;

const PinkText = styled.span`
  color: #ff847c;
  font-weight: bold;
`;

const GreyText = styled.span`
  color: #aeccc6;
  font-weight: bold;
`;

export default Dwarfplanets;
