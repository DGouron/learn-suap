import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateSelectedAnswerId } from '../store/AnswerManagementActions';
import { useState } from 'react';

const StyledAnswer = styled.div`
  margin: 10px;
`;

const StyledButton = styled.button`
  outline: 2px solid #d3d6da;
  background-color: #650a0b;
  color: white;
  border-radius: 5px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s outline;
  width: auto;
  min-width: 128px;
  height: 96px;
  font-size: auto;
  font-weight: bold;
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
