import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledPannel = styled.div`
  height: 60%;
  width: 20%;
  background-color: green;
`;

function StatsPannel() {
  const score = useSelector((state) => state.score);
  let scoretext = 'Le score est: ' + score;

  const bestSerie = useSelector((state) => state.bestSerie);
  let bestSerieText = 'Meilleure série : ' + bestSerie;

  const selectedAnswerId = useSelector((state) => state.selectedAnswerId);
  let selectedAnswerIdText = 'Réponse selectionnée : ' + selectedAnswerId;

  const goodAnswersIds = useSelector((state) => state.goodAnswersIds);
  let goodAnswersText = 'Bonnes réponses : ' + goodAnswersIds;
  return (
    <StyledPannel>
      <p>{scoretext}</p>
      <p>{bestSerieText}</p>
      <p>{selectedAnswerIdText}</p>
      <p>{goodAnswersText}</p>
    </StyledPannel>
  );
}

export default StatsPannel;
