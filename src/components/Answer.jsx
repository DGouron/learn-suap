import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateSelectedAnswerId } from '../store/AnswerManagementActions';

const StyledAnswer = styled.div`
  background-color: red;
  border: 1px solid grey;
  margin: 10px;
`;

const StyledButton = styled.button`
  width: auto;
  min-width: 128px;
  height: 96px;
  font-size: 18px;
`;
let selectedAnswerId = -1;

function Answer(props) {
  selectedAnswerId = props.answerId;
  const dispatch = useDispatch();

  let setAnswered = props.setAnswered;

  function selectThisAnswer() {
    setAnswered(true);
  }

  return (
    <StyledAnswer>
      <StyledButton
        onClick={() => {
          dispatch(updateSelectedAnswerId(selectedAnswerId));
          selectThisAnswer();
        }}
      >
        {props.content}
      </StyledButton>
    </StyledAnswer>
  );
}

export default Answer;
