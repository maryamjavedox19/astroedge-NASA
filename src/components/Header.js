import React from 'react'
import styled from 'styled-components';


export default function Header() {
  return (
    <HeaderContainer>
      <h3>Space</h3>
      <ul>
        <li>Voyages</li>
        <li>spacecrafts</li>
        <li>travel expeneditures</li>
      </ul>

    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
width:90%;
height:5rem;
background-color:transparent;
display:flex;
align-items:center;
justify-content:space-between;
font-family: 'Poppins', sans-serif;
color:#DCDCDC;



h3{
  color:white;
  display:flex;
  align-items:center;
  padding:0 2rem
}

ul{
  margin-left:7rem;
  list-style:none;
  text-decoration:none;
  color:white;
  display:flex;

li{
  display:flex;
  margin-left:2rem;

  &:hover{
    cursor:pointer;
  }

}

}
`

