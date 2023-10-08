import React from 'react';
import styled from 'styled-components'; // Import styled once
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <HeaderContainer>
      <h3>
        <Link to="/">Space</Link>
      </h3>
      <ul>
        <li>
          <Link to="/introduction">Introduction</Link>
        </li>

        <li>
          <Link to="/contact">contact</Link>
        </li>

        <li>
          <Link to="/asteroid">Asteroid</Link>
        </li>

        <li>
          <Link to="/moon">Moon</Link>
        </li>

        <li>
          <Link to="/dwarf">Dwarf Planets</Link>
        </li>




      </ul>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
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
    text-decoration: none;
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

