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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

let ratioColor = 'black';

const StyledRatioText = styled.h2`
  color: ${ratioColor};
  font-size: 1em;
`;

const StyledResetButton = styled.button`
  background-color: #b1a7a6;
  color: #ba181b;
  width: 40%;
  height: auto;
  min-height: 48px;
  font-weight: bold;
  font-size: 1.2em;
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
