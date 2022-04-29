import styled from 'styled-components';

const StyledQuestion = styled.div`
  flex-grow: 2;
`;

function Question(props) {
  return (
    <StyledQuestion>
      <h2>{props.title} :</h2>
    </StyledQuestion>
  );
}

export default Question;
