import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <Container>
        <Header></Header>
        <h1>
          {' '}
          SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
        </h1>
        <p>Join Astroedge for an unforgettable journey!</p>
        <button>
          <Link to="/starttour" style={{ textDecoration: "none", color: "white" }}>Start Tour</Link>
        </button>
        <SubContainer></SubContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  &:before {
    background-color:#000207;
    no-repeat: fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  h1{
    position:absolute;
    top:18rem;
    left:7rem;
    font-size:2rem;
    font-family: 'Work Sans', sans-serif;
    letter-spacing:4px;
    font-family: 'Amatic SC', cursive;
    line-height:5rem;

    span{
    display:block;
    text-align:center;
    letter-spacing:18px;
    font-size:85px;
    font-family: 'Josefin Sans', sans-serif;
    }
  }

  p{
    position:absolute;
    top:27rem;
    left: 5.1rem;
    font-size:1.1rem;
    // letter-spacing:1px;
    //font-family: 'Amatic SC', cursive;
    font-family: "Work Sans", sans-serif;

    line-height:5rem;
  }


  button{
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
    top:40rem;
    // left:7rem;
    right:25rem;
    border: 1px solid white;
    border-radius:25px;

    &:hover{
      cursor:pointer;
    }
  }
`;



const SubContainer = styled.div`
  min-width: 35%;
  height: 100%;
  background: url('images/halff.png');
  background-position: right;
  background-size: cover;
  display: flex;
  justify-content: end;
`;

export default Home;
