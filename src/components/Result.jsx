import { useSelector } from 'react-redux';
import { currentAnswerTraitmentSelector } from '../store/AnswerManagementSelectors';
import { Loader } from './Loader';

function Result(props) {
  const bAnswerTraiment = useSelector(currentAnswerTraitmentSelector);
  return (
    <p>
      {props.resultText}
      {bAnswerTraiment ? <Loader /> : ''}
    </p>
  );
}

export default Result;
