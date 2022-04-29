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
let answerId = undefined;

function Answer(props) {
  answerId = props.answerId;
  console.log(answerId);
  return (
    <StyledAnswer>
      <StyledButton onClick={() => handleClick()}>{props.content}</StyledButton>
    </StyledAnswer>
  );
}

function handleClick() {
  console.log(answerId);
}
export default Answer;
