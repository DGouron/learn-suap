import styled from 'styled-components';
const StyledAnswer = styled.div`
  background-color: red;
  border: 1px solid grey;
  margin: 10px;
`;

const StyledButton = styled.input`
  width: auto;
  min-width: 128px;
  height: 96px;
  font-size: 18px;
`;

function Answer(props) {
  return (
    <StyledAnswer>
      <StyledButton type="button" value={props.content} />
    </StyledAnswer>
  );
}

export default Answer;
