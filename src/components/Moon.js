import styled from 'styled-components';
import Header from './Header';

export default function Moon() {
  return (
    <Container>
      <Header />
      <h1>Fascinating Facts About the Moon.</h1>
      <GridContainer>
        <SubContainer />
        <ContentContainer>
          <SubContainergrid>
            <div>
              <p>The Moon's surface is covered with various features, including craters, mountains, valleys, and vast
                plains called maria. </p>
            </div>

            <div>
              <h3></h3>
              <p>The Moon is Earth's only natural satellite and is the fifth-largest moon in the solar system. It orbits
                Earth at an average distance of approximately 384,400 kilometers (238,855 miles).</p>
            </div>

            <div>
              <p>The Moon has only about 1/6th the gravity of Earth, which means objects on the Moon weigh six
                times less than they do on Earth. Its mass is approximately 1.2% that of Earth</p>
            </div>
          </SubContainergrid>
          <SubContainergrid>
            <div>
              <p>These phases are responsible for the varying amount of the Moon's surface that is illuminated.</p>
            </div>

            <div>
              <p>The Moon is believed to have formed about 4.5 billion years ago, shortly after Earth, following a giant
                impact between Earth and a Mars-sized celestial body.</p>
            </div>

            <div>
              <p>The Moon goes through a cycle of phases, including new moon, first quarter, full moon, and last
                quarter, due to its changing position relative to the Earth and the Sun.</p>
            </div>
          </SubContainergrid>
          <SubContainergrid>
            <div>
              <p>Unlike Earth, the Moon lacks a substantial atmosphere. It has a very thin exosphere made up of trace
                gases.</p>
            </div>
            <div>
              <p>These moonquakes can be relatively small or quite powerful, with some reaching magnitudes of up to
                5.5 on the Richter scale.</p>
            </div>

            <div>
              <p>The Moon experiences moonquakes, which are caused by the gravitational interactions with Earth
                and the cooling and contracting of the Moon's interior.</p>
            </div>

          </SubContainergrid>
        </ContentContainer>
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
  overflow:auto;


  h1{
    display:flex;
    justify-content:end;
    padding-right:15rem;
    font-size:30px;
    position:relative;
    top:4rem

  }


`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 80rem;
  margin-right:2rem;


`;

const SubContainer = styled.div`
  background-image: url('images/fullmoonn.jpg');
  background-size: cover;
  background-position: right;
  width: 40vw;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: grid;
  padding: 2rem;
  margin-top: 6rem;
  grid-template-columns: repeat(3, 1fr);
  column-gap:2rem;
  border:2px solid white;
  margin-bottom:5rem;
  width: 63vw;
  margin-left:13rem

`;

const SubContainergrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 15rem);

  div{
    p{
      width:17rem
    }
  }
  

`;
