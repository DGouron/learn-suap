import Answer from './Answer';
import styled from 'styled-components';

const StyledAnswersPannel = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #3b383a;
  border-radius: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

function AnswersPannel(props) {
  let answers = [];

  for (let index = 0; index < props.answers.length; index++) {
    answers.push(
      <Answer
        key={index}
        idOfthisAnswer={index}
        content={props.answers[index]}
        currentAnswerId={props.currentAnswerId}
        setAnswerId={props.setAnswerId}
        answered={props.answered}
        setAnswered={props.setAnswered}
      />
    );
  }

  return (
    <StyledAnswersPannel>{answers.map((answer) => answer)}</StyledAnswersPannel>
  );
}

export default AnswersPannel;
