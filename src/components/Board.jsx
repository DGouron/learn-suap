import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import { updateGoodAnswers } from '../store/AnswerManagementActions';
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
let currentGoodAnswers = [];

function Board() {
  const [isLaunched, setIsLaunched] = useState(false);
  useEffect(() => {
    document.title = isLaunched ? 'Quiz en cours ! ' : 'Learn Suap App';
  }, [isLaunched]);

  const [, forceUpdate] = useState();
  const updateRender = useCallback(() => forceUpdate({}), []);

  const [currentAnswerId, setAnswerId] = useState(42);
  const [answered, setAnswered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentAnswerId !== -1 && answered === true) {
      if (checkAnswerValidity(currentAnswerId)) {
        currentQuestion = pickRandomQuestion();
        dispatch(updateGoodAnswers(currentQuestion.goodAnswersIds));

        updateRender();
        setAnswered(false);
      }
    }
  }, [currentAnswerId, answered, updateRender, dispatch]);

  return isLaunched === false ? (
    <StyledBoard>
      <Categories />
      <StyledLauncherButton
        onClick={() => {
          currentQuestion = pickRandomQuestion();
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
      <p>{currentAnswerId}</p>
      <AnswersPannel
        answers={currentQuestion.Answers}
        currentAnswerId={currentAnswerId}
        setAnswerId={setAnswerId}
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

function checkAnswerValidity(answerId = 0) {
  let isAGoodAnswer = currentGoodAnswers.includes(answerId, 0);
  console.log(isAGoodAnswer ? 'Good Answer' : 'Bad Answer');
  return true;
}

export default Board;
