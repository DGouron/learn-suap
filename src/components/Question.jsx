import styled from 'styled-components';

const StyledQuestion = styled.section`
  margin: auto;
`;

function Question(props) {
  return (
    <StyledQuestion>
      <h2>{props.title} :</h2>
    </StyledQuestion>
  );
}

export default Question;
