import React from 'react';
import styled from 'styled-components'; // Import styled once
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <HeaderContainer>
      <h3>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Space</Link>
      </h3>
      <ul>
        <li>
          <Link to="/introduction" style={{ textDecoration: "none", color: "white" }}>Introduction</Link>
        </li>

        <li>
          <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact</Link>
        </li>

        <li>
          <Link to="/asteroid" style={{ textDecoration: "none", color: "white" }}>Asteroid</Link>
        </li>

        <li>
          <Link to="/moon" style={{ textDecoration: "none", color: "white" }}>Moon</Link>
        </li>

        <li>
          <Link to="/dwarf" style={{ textDecoration: "none", color: "white" }}>Dwarf Planets</Link>
        </li>




      </ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 70%;
  height: 5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  color: #DCDCDC;

  h3 {
    color: white;
    display: flex;
    align-items: center;
    padding: 0 2rem;
  }

  ul {
    margin-left: 7rem;
    list-style: none;
    text-decoration: none !important;
    color: white;
    display: flex;

    li {
      display: flex;
      margin-left: 2rem;
      list-style: none;
      color: white;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

