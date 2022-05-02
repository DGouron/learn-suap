import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  currentRatioSelector,
  currentScoreSelector,
} from '../store/AnswerManagementSelectors';

const StyledPannel = styled.div`
  height: 60%;
  width: 20%;
  background-color: green;
`;

function StatsPannel() {
  const score = useSelector(currentScoreSelector);
  let scoretext = 'Le score est: ' + score;

  const bestSerie = useSelector((state) => state.bestSerie);
  let bestSerieText = 'Meilleure série : ' + bestSerie;

  const ratio = useSelector(currentRatioSelector);
  let ratioText = ratio + '% de tes réponses sont correctes.';
  return (
    <StyledPannel>
      <p>{scoretext}</p>
      <p>{bestSerieText}</p>
      <p>{ratioText}</p>
    </StyledPannel>
  );
}

export default StatsPannel;
