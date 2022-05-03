import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  updateAnswerTraitment,
  updateSelectedAnswerId,
} from '../store/AnswerManagementActions';
import { useState } from 'react';

const StyledAnswer = styled.div`
  margin: 10px;
`;

const StyledButton = styled.button`
  transition: 0.25s outline;
  background-color: #650a0b;
  outline: 1px solid #650a0b;
  border: 0px;
  border-radius: 5px;
  box-shadow: 4px 6px 8px 2px rgba(0, 0, 0, 0.79);

  color: white;
  letter-spacing: 0.2rem;
  font-size: auto;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  min-width: 128px;
  height: 96px;

  &:hover {
    outline: 2px solid #909595;
  }
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
          dispatch(updateAnswerTraitment(true));
          dispatch(updateSelectedAnswerId(idOfthisAnswer));
          selectThisAnswer();
        }}
        disabled={props.answered ? 'disabled' : ''}
      >
        {props.content}
      </StyledButton>
    </StyledAnswer>
  );
}

export default Answer;
