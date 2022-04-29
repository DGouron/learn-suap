import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import AnswersPannel from './AnswersPannel';
import Categories from './Categories';
import Question from './Question';

const StyledBoard = styled.div`
  height: 60%;
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

function Board() {
  let currentQuestion = pickRandomQuestion();
  return (
    <StyledBoard>
      <Categories />
      <Question title={currentQuestion.Question} />
      <AnswersPannel answers={currentQuestion.Answers} />
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

  console.log(currentCategory);
  console.log(currentCategory.questions[randomID].Question);

  return currentCategory.questions[randomID];
}
export default Board;
