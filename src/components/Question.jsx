import styled from 'styled-components';

const StyledQuestion = styled.section`
  margin: auto;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;

  @media (max-width: 800px) {
    margin: 1%;
    font-size: 14px;
  }
`;

function Question(props) {
  return (
    <StyledQuestion>
      <h2>{props.title} :</h2>
    </StyledQuestion>
  );
}

export default Question;
