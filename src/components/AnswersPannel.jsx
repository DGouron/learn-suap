import Answer from './Answer';
import styled from 'styled-components';
import { Loader } from './Loader';

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

  if (props.answers !== undefined) {
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
  }

  return (
    <StyledAnswersPannel>
      {props.answers === undefined ? (
        <Loader />
      ) : (
        answers.map((answer) => answer)
      )}
    </StyledAnswersPannel>
  );
}

export default AnswersPannel;
