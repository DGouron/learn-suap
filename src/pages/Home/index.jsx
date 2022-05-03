import styled from 'styled-components';
import Board from '../../components/Board';
import StatsPannel from '../../components/StatsPannel';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin-top: 5%;
  flex-direction: row;
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
