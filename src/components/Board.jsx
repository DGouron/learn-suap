import styled from 'styled-components';
import AnswersPannel from './AnswersPannel';
import Question from './Question';

const StyledBoard = styled.div`
  height: 60%;
  width: 60%;
  max-width: 60%;
  background-color: blue;
  border-radius: 20px;
  margin-left: 1%;
  padding: 1%;
  flex-grow: 2;
`;

function Board() {
  return (
    <StyledBoard>
      <Question />
      <AnswersPannel />
    </StyledBoard>
  );
}

export default Board;
