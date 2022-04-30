import Answer from './Answer';
import styled from 'styled-components';
const StyledAnswersPannel = styled.div`
  display: flex;
  flex-direction: row;
  background-color: maroon;
  border: 1px solid grey;
  border-radius: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

function AnswersPannel(props) {
  let answers = [];
  for (let index = 0; index < props.answers.length; index++) {
    answers.push(
      <Answer
        key={index}
        answerId={index}
        content={props.answers[index]}
        currentAnswerId={props.currentAnswerId}
        setAnswerId={props.setAnswerId}
      />
    );
    console.log(index);
  }

  return (
    <StyledAnswersPannel>{answers.map((answer) => answer)}</StyledAnswersPannel>
  );
}

export default AnswersPannel;
