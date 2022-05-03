import { useSelector } from 'react-redux';
import { currentAnswerTraitmentSelector } from '../store/AnswerManagementSelectors';
import { Loader } from './Loader';
import styled from 'styled-components';

const StyledResult = styled.div`
  margin-left: 45%;
`;

function Result(props) {
  const bAnswerTraiment = useSelector(currentAnswerTraitmentSelector);
  return (
    <StyledResult>
      <p>
        {props.resultText}
        {bAnswerTraiment ? <Loader /> : ''}
      </p>
    </StyledResult>
  );
}

export default Result;
