import React from 'react'
import styled from 'styled-components'
import Header from './Header'

export default function Introduction() {
  return (
    <>
      <Header></Header>

      <Container>
        <Content>
          <p>
            No matter where each of us stands
            on this planet we call home, we all
            look up to the same place. That’s why
            we believe space belongs to
            everyone: the adventurous, the
            audacious, and the curious.
          </p>

          <br></br>

          <p>Our mission is to ignite your curiosity and fuel your wanderlust as we guide you through the captivating destinations that await you among the stars. Whether you're an astronomy enthusiast, an aspiring astronaut, or simply a curious traveler, our website is your portal to the cosmos.

          </p>
        </Content>

      </Container>
    </>



  )
}


const Container = styled.div`
width:100%;
height:87vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


p{
  width:33vw;
  line-height:1.3vw;
  font-size:1.1rem

  
}
`

const Content = styled.div`
background-color:#3e4a61;
padding:1.4rem;
border-radius:1rem


`