import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import {
  updateAnswerTraitment,
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

const StyledBoard = styled.article`
  height: auto;
  min-height: 50%;
  max-height: 70%;
  width: 60%;
  max-width: 60%;
  background-color: #b1a7a6;
  border-radius: 10px;
  margin-left: 1%;
  flex-grow: 2;
  margin-right: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  @media (max-width: 1080px) {
    max-height: 90%;
  }
  @media (max-width: 800px) {
    max-height: 90%;
    width: 100vw;
    min-width: 100%;
    margin-left: 1%;
    margin-right: 3%;
    justify-content: top;
  }
`;

const StyledLauncherButton = styled.button`
  width: auto;
  max-width: 70%;
  margin: 10%;
  max-height: 72px;
  font-size: 18px;
  flex-grow: 2;

  transition: 0.25s outline;
  background-color: #9a0101;
  outline: 1px solid #650a0b;
  border: 0px;
  border-radius: 5px;
  box-shadow: 4px 6px 8px 2px rgba(0, 0, 0, 0.79);

  color: white;
  letter-spacing: 0.2rem;
  font-size: auto;
  font-weight: bold;

  &:hover {
    outline: 2px solid #909595;
  }
`;

let currentQuestion = '';

function Board() {
  const delaiBeforeNextQuestion = 3000;
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
      setTimeout(() => {
        currentQuestion = pickRandomQuestion(categorySelected);
        dispatch(updateGoodAnswers(currentQuestion.GoodAnswers));
        updateRender();
        dispatch(updateAnswerTraitment(false));
        setAnswered(false);
      }, delaiBeforeNextQuestion);
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
      <section>
        <Result delayBeforeNextQuestion={delaiBeforeNextQuestion} />
      </section>
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
