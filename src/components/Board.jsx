import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import {
  updateGoodAnswers,
  updateNeedRestartApp,
} from '../store/AnswerManagementActions';
import {
  currentCategorySelected,
  currentNeedRestartAppSelector,
  currentScoreSelector,
} from '../store/AnswerManagementSelectors';
import AnswersPannel from './AnswersPannel';
import Categories from './Categories';
import Question from './Question';
import Result from './Result';

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
  const dispatch = useDispatch();

  const score = useSelector(currentScoreSelector);
  const categorySelected = useSelector(currentCategorySelected);

  const [isLaunched, setIsLaunched] = useState(false);
  useEffect(() => {
    document.title = isLaunched ? `Quiz score ${score} ! ` : 'Learn Suap App';
  }, [isLaunched, score]);

  const bNeedRestartApp = useSelector(currentNeedRestartAppSelector);
  useEffect(() => {
    if (bNeedRestartApp) {
      setIsLaunched(false);
      dispatch(updateNeedRestartApp(false));
    }
  }, [bNeedRestartApp, dispatch]);

  const [, forceUpdate] = useState();
  const updateRender = useCallback(() => forceUpdate({}), []);

  const [answered, setAnswered] = useState(false);
  useEffect(() => {
    if (answered === true) {
      currentQuestion = pickRandomQuestion(categorySelected);
      dispatch(updateGoodAnswers(currentQuestion.GoodAnswers));
      updateRender();
      setAnswered(false);
    }
  }, [answered, updateRender, dispatch, categorySelected]);

  useEffect(() => {
    if (isLaunched) currentQuestion = pickRandomQuestion(categorySelected);
  }, [isLaunched, categorySelected]);

  return isLaunched === false ? (
    <StyledBoard>
      <Categories />
      <StyledLauncherButton
        onClick={() => {
          currentQuestion = pickRandomQuestion(categorySelected);
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
      <Result />
      <AnswersPannel
        answers={currentQuestion.Answers}
        answered={answered}
        setAnswered={setAnswered}
      />
    </StyledBoard>
  );
}

function pickRandomQuestion(categorySelected) {
  let randomCategory = 0;
  let currentCategory = undefined;

  if (categorySelected === 'ALL') {
    randomCategory = Math.round(
      Math.random() * (dataQuestions.length - 1 - 0) + 0
    );
    currentCategory = dataQuestions[randomCategory];
  }

  if (categorySelected === 'PROMPT') {
    currentCategory = dataQuestions[0];
  }

  if (categorySelected === 'SUAP') {
    currentCategory = dataQuestions[1];
  }

  let randomID = Math.round(
    Math.random() * (currentCategory.questions.length - 1 - 0) + 0
  );

  return currentCategory.questions[randomID];
}

export default Board;
