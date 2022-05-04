import { useSelector } from 'react-redux';
import {
  currentAnswerTraitmentSelector,
  currentGoodAnswersSelector,
  currentSelectedAnswerIdSelector,
} from '../store/AnswerManagementSelectors';
import { Loader } from './Loader';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledResult = styled.div`
  margin-left: 40%;
  padding: 5%;
`;

const StyledResultText = styled.p`
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
  font-weight: bold;
`;

function Result(props) {
  const delayBeforeNextQuestion = props.delayBeforeNextQuestion;
  const bAnswerTraiment = useSelector(currentAnswerTraitmentSelector);
  const selectedAnswerId = useSelector(currentSelectedAnswerIdSelector);
  const goodAnswersIds = useSelector(currentGoodAnswersSelector);

  const [resultText, setResultText] = useState('');

  useEffect(() => {
    if (bAnswerTraiment) {
      setTimeout(() => {
        setResultText(
          goodAnswersIds.includes(selectedAnswerId)
            ? 'Bonne réponse !'
            : "Et non, ce n'est pas la bonne réponse !"
        );
      }, delayBeforeNextQuestion / 3);

      setTimeout(() => {
        setResultText('');
      }, delayBeforeNextQuestion);
    }
  }, [
    bAnswerTraiment,
    delayBeforeNextQuestion,
    goodAnswersIds,
    selectedAnswerId,
  ]);

  return (
    <StyledResult>
      <aside>
        <StyledResultText>{resultText}</StyledResultText>
        {bAnswerTraiment ? <Loader /> : ''}
      </aside>
    </StyledResult>
  );
}

export default Result;
