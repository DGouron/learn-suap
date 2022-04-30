import styled from 'styled-components';
const StyledAnswer = styled.div`
  background-color: red;
  border: 1px solid grey;
  margin: 10px;
`;

const StyledButton = styled.button`
  width: auto;
  min-width: 128px;
  height: 96px;
  font-size: 18px;
`;
let answerId = -1;

function Answer(props) {
  answerId = props.answerId;
  console.log(answerId);
  let setAnswerId = props.setAnswerId;
  let setAnswered = props.setAnswered;

  function selectThisAnswer() {
    setAnswerId(answerId);
    setAnswered(true);
  }

  return (
    <StyledAnswer>
      <StyledButton onClick={() => selectThisAnswer()}>
        {props.content}
      </StyledButton>
    </StyledAnswer>
  );
}

export default Answer;
