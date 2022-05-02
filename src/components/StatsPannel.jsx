import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  currentRatioSelector,
  currentScoreSelector,
} from '../store/AnswerManagementSelectors';
import { restart } from '../store/AnswerManagementActions';

const StyledPannel = styled.div`
  height: 60%;
  width: 20%;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

let ratioColor = 'black';

const StyledRatioText = styled.p`
  color: ${ratioColor};
  font-size: 32px;
`;

const StyledResetButton = styled.button`
  background-color: red;
  color: white;
  width: 80%;
  height: auto;
  font-size: 20px;
`;

function StatsPannel() {
  const dispatch = useDispatch();

  const score = useSelector(currentScoreSelector);
  let scoretext = 'Score total : ' + score;

  const bestSerie = useSelector((state) => state.bestSerie);
  let bestSerieText = 'Série de bonnes réponses: ' + bestSerie;

  const ratio = useSelector(currentRatioSelector);
  ratioColor = ratio < 60 ? 'green' : 'red';
  let ratioText =
    ratio === 100
      ? "C'est un sans fautes !"
      : ratio + '% de tes réponses sont correctes.';
  return (
    <StyledPannel>
      <p>{scoretext}</p>
      <p>{bestSerieText}</p>
      <p>Meilleure série : </p>
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
