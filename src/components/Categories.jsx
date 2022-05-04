import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import Category from './Category';

const StyledCategories = styled.nav`
  width: 60%;
`;

const StyledSelector = styled.select`
  width: 60%;
  height: 100%;
  background-color: #3b383a;
  border: 2px solid #909595;
  border-radius: 10px;
  padding: 5px;
  color: white;
  font-size: 18px;
  vertical-align: center;
  top: 0px;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
function Categories() {
  let totalQuestionsNumber =
    dataQuestions[0].questions.length + dataQuestions[1].questions.length;

  return (
    <StyledCategories>
      <StyledSelector name="Categories" id="Categories" defaultValue={'ALL'}>
        <Category
          categoryName="ALL"
          title={'Toutes les questions (' + totalQuestionsNumber + ')'}
        />
        <Category
          categoryName="PROMPT"
          title={
            'Questions Equipier prompt-secours (' +
            dataQuestions[0].questions.length +
            ')'
          }
        />
        <Category
          categoryName="SUAP"
          title={
            'Questions Equipier SUAP (' +
            dataQuestions[1].questions.length +
            ')'
          }
        />
      </StyledSelector>
    </StyledCategories>
  );
}

export default Categories;
