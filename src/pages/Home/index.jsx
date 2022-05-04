import styled from 'styled-components';
import Board from '../../components/Board';
import StatsPannel from '../../components/StatsPannel';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin-top: 5%;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

function Home() {
  return (
    <Container>
      <StatsPannel />
      <Board />
    </Container>
  );
}

export default Home;
