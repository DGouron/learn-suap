import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateSelectedAnswerId } from '../store/AnswerManagementActions';
import { useState } from 'react';

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

function Answer(props) {
  const [idOfthisAnswer] = useState(props.idOfthisAnswer);

  const dispatch = useDispatch();
  let setAnswered = props.setAnswered;

  function selectThisAnswer() {
    setAnswered(true);
  }

  return (
    <StyledAnswer>
      <StyledButton
        onClick={() => {
          dispatch(updateSelectedAnswerId(idOfthisAnswer));
          selectThisAnswer();
        }}
      >
        {props.content}
      </StyledButton>
    </StyledAnswer>
  );
}

export default Answer;
