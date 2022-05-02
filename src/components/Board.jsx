import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import { updateGoodAnswers } from '../store/AnswerManagementActions';
import { currentScoreSelector } from '../store/AnswerManagementSelectors';
import AnswersPannel from './AnswersPannel';
import Categories from './Categories';
import Question from './Question';

const StyledBoard = styled.div`
  height: auto;
  min-height: 50%;
  max-height: 60%;
  width: 60%;
  max-width: 60%;
  background-color: blue;
  border-radius: 20px;
  margin-left: 1%;
  padding: 1%;
  flex-grow: 2;

  display: flex;
  flex-direction: column;
`;

const StyledLauncherButton = styled.button`
  width: 128px;
  min-width: 128px;
  height: 96px;
  font-size: 18px;
`;

let currentQuestion = '';

function Board() {
  const score = useSelector(currentScoreSelector);
  const [isLaunched, setIsLaunched] = useState(false);
  useEffect(() => {
    document.title = isLaunched ? `Quiz score ${score} ! ` : 'Learn Suap App';
  }, [isLaunched, score]);

  const [, forceUpdate] = useState();
  const updateRender = useCallback(() => forceUpdate({}), []);

  const [answered, setAnswered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (answered === true) {
      currentQuestion = pickRandomQuestion();
      dispatch(updateGoodAnswers(currentQuestion.GoodAnswers));
      updateRender();
      setAnswered(false);
    }
  }, [answered, updateRender, dispatch]);

  useEffect(() => {
    if (isLaunched) currentQuestion = pickRandomQuestion();
  }, [isLaunched]);

  return isLaunched === false ? (
    <StyledBoard>
      <Categories />
      <StyledLauncherButton
        onClick={() => {
          currentQuestion = pickRandomQuestion();
          dispatch(updateGoodAnswers(currentQuestion.GoodAnswers));
          setIsLaunched(true);
        }}
      >
        Commencer
      </StyledLauncherButton>
    </StyledBoard>
  ) : (
    <StyledBoard>
      <Categories />
      <Question title={currentQuestion.Question} />
      <AnswersPannel
        answers={currentQuestion.Answers}
        answered={answered}
        setAnswered={setAnswered}
      />
    </StyledBoard>
  );
}

function pickRandomQuestion() {
  let randomCategory = Math.round(
    Math.random() * (dataQuestions.length - 1 - 0) + 0
  );
  let currentCategory = dataQuestions[randomCategory];
  let randomID = Math.round(
    Math.random() * (currentCategory.questions.length - 1 - 0) + 0
  );

  return currentCategory.questions[randomID];
}

export default Board;
