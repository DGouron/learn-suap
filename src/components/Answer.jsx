import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAnswerTraitment,
  updateSelectedAnswerId,
} from '../store/AnswerManagementActions';
import { useCallback, useEffect, useState } from 'react';
import {
  currentAnswerTraitmentSelector,
  currentGoodAnswersSelector,
} from '../store/AnswerManagementSelectors';
import { ThemeProvider } from 'styled-components';

const StyledAnswer = styled.div`
  margin: 10px;
`;

const hoverOutlineColor = '2px solid #909595';
const defaultTheme = {
  outline: '1px solid #650a0b',
  hoverOutline: hoverOutlineColor,
};
const rightTheme = { outline: '5px solid green', hoverOutline: '' };
const wrongTheme = { outline: '2px solid red', hoverOutline: '' };

const StyledButton = styled.button`
  transition: 0.1s outline ease;
  background-color: #650a0b;
  outline: ${(props) => props.theme.outline || '1px solid #650a0b'};
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

  &:active {
    outline: ${(props) => props.theme.outline || '1px solid #650a0b'};
  }
  &:visited {
    outline: ${(props) => props.theme.outline || '1px solid #650a0b'};
  }

  @media (max-width: 1080px) {
    height: 48px;
  }
  @media (max-width: 800px) {
    height: 48px;
  }
`;

function Answer(props) {
  const [idOfthisAnswer] = useState(props.idOfthisAnswer);
  const [activeButton, setActiveButton] = useState(false);
  const answerTraitment = useSelector(currentAnswerTraitmentSelector);
  const goodAnswersIds = useSelector(currentGoodAnswersSelector);

  const [, forceUpdate] = useState();
  const updateRender = useCallback(() => forceUpdate({}), []);

  const [themeName, setThemeName] = useState(defaultTheme);

  useEffect(() => {
    if (answerTraitment) {
      setActiveButton(true);
      goodAnswersIds.includes(idOfthisAnswer)
        ? setThemeName(rightTheme)
        : setThemeName(wrongTheme);
      updateRender();
    }
    if (answerTraitment === false) {
      setActiveButton(false);
      setThemeName(defaultTheme);
    }
  }, [answerTraitment, idOfthisAnswer, goodAnswersIds, updateRender]);

  const dispatch = useDispatch();
  let setAnswered = props.setAnswered;

  function selectThisAnswer() {
    setAnswered(true);
  }
  return (
    <StyledAnswer>
      <ThemeProvider theme={themeName}>
        <StyledButton
          onClick={() => {
            dispatch(updateAnswerTraitment(true));
            dispatch(updateSelectedAnswerId(idOfthisAnswer));
            selectThisAnswer();
          }}
          disabled={activeButton}
        >
          {props.content}
        </StyledButton>
      </ThemeProvider>
    </StyledAnswer>
  );
}

export default Answer;
