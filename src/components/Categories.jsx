import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import Category from './Category';

const StyledCategories = styled.nav``;

const StyledSelector = styled.select`
  background-color: #3b383a;
  border: 2px solid #909595;
  border-radius: 10px;
  padding: 5px;
  color: white;
  font-size: 18px;
  vertical-align: center;
`;
function Categories() {
  let totalQuestionsNumber =
    dataQuestions[0].questions.length + dataQuestions[1].questions.length;

  return (
    <StyledCategories>
      <StyledSelector name="Categories" id="Categories">
        <Category
          categoryName="ALL"
          title={'Toutes les questions (' + totalQuestionsNumber + ')'}
          isDefaultSelect={true}
        />
        <Category
          categoryName="PROMPT"
          title={
            'Questions Equipier promp-secours (' +
            dataQuestions[0].questions.length +
            ')'
          }
          isDefaultSelect={false}
        />
        <Category
          categoryName="SUAP"
          title={
            'Questions Equipier SUAP (' +
            dataQuestions[1].questions.length +
            ')'
          }
          isDefaultSelect={false}
        />
      </StyledSelector>
    </StyledCategories>
  );
}

export default Categories;
