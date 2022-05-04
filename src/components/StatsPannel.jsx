import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentRatioSelector,
  currentScoreSelector,
} from '../store/AnswerManagementSelectors';
import { restart } from '../store/AnswerManagementActions';

const StyledPannel = styled.aside`
  height: auto;
  min-height: 50%;
  max-height: 60%;
  width: 20%;
  background-color: #d3d3d3;
  border-radius: 10px;
  border: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  color: black;
  text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.2);
  font-size: 18px;
  font-weight: bold;

  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  @media (max-width: 1080px) {
    font-size: 12px;
    margin-bottom: 5%;
  }
  @media (max-width: 800px) {
    font-size: 10px;
    flex-direction: row;
    height: auto;
    width: auto;
    min-height: 5%;
    max-height: 10%;
    margin-bottom: 5%;
  }
`;

let ratioColor = 'black';

const StyledRatioText = styled.h2`
  color: ${ratioColor};
  font-size: 1em;
`;

const StyledResetButton = styled.button`
  transition: 0.25s outline;
  background-color: #650a0b;
  outline: 1px solid #650a0b;
  border: 0px;
  border-radius: 5px;
  box-shadow: 4px 6px 8px 2px rgba(0, 0, 0, 0.79);
  width: auto;
  height: auto;
  min-height: 48px;

  color: white;
  letter-spacing: 0.2rem;
  font-size: auto;
  font-weight: bold;

  &:hover {
    outline: 2px solid #909595;
  }

  @media (max-width: 800px) {
    font-size: 12px;
    flex-direction: row;
    height: 48px;
  }
`;

function StatsPannel() {
  const dispatch = useDispatch();

  const score = useSelector(currentScoreSelector);
  let scoretext = 'Score total : ' + score;

  const bestSerie = useSelector((state) => state.bestSerie);
  let bestSerieText = 'Meilleure série : ' + bestSerie;

  const currentSerie = useSelector((state) => state.currentSerie);
  let currentSerieText = 'Série de bonnes réponses: ' + currentSerie;

  const ratio = useSelector(currentRatioSelector);
  ratioColor = ratio < 60 ? 'green' : 'red';
  let ratioText =
    ratio === 100
      ? "C'est un sans fautes !"
      : ratio + '% de tes réponses sont correctes.';
  return (
    <StyledPannel>
      <p>{scoretext}</p>
      <p>{currentSerieText}</p>
      <p>{bestSerieText} </p>
      <StyledRatioText>{ratioText}</StyledRatioText>
      <br />
      <StyledResetButton
        onClick={() => {
          dispatch(restart());
        }}
      >
        Réinitialiser
      </StyledResetButton>
    </StyledPannel>
  );
}

export default StatsPannel;
