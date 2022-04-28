import styled from 'styled-components';
const StyledAnswer = styled.div`
  background-color: red;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 10px;
`;

function Answer() {
  return (
    <StyledAnswer>
      <p>C - pallier à la défaillance des structures libérales</p>
    </StyledAnswer>
  );
}

export default Answer;
