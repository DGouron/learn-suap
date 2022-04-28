import Answer from './Answer';
import styled from 'styled-components';
const StyledAnswersPannel = styled.div`
  display: flex;
  flex-direction: row;
  background-color: maroon;
  border: 1px solid grey;
  border-radius: 20px;
`;

function AnswersPannel() {
  return (
    <StyledAnswersPannel>
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </StyledAnswersPannel>
  );
}

export default AnswersPannel;
