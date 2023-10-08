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
            We're here to answer your questions and assist you with any inquiries you may have about your upcoming space adventure.
          </p>

          <br></br>


          <p>
            Email:spcetravelwithus@gmail.component
          </p>
          <br></br>


          <p>Phone: +92-21-111-786-786</p>
          <br></br>

          <p>Address: 123 Galaxy Avenue, Karachi City, Shah Faisal</p>
        </Content>

      </Container>
    </>



  )
}


const Container = styled.div`
width:100%;
height:85vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


p{
  width:34vw;
  line-height:1.3vw;
  font-size:1.1rem

  
}
`

const Content = styled.div`
background-color:#3e4a61;
padding:1.4rem;
border-radius:1rem


`