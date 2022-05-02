import styled from 'styled-components';
import { dataQuestions } from '../datas/Questions';
import Category from './Category';

const StyledCategories = styled.div``;
function Categories() {
  let totalQuestionsNumber =
    dataQuestions[0].questions.length + dataQuestions[1].questions.length;

  return (
    <StyledCategories>
      <select name="Categories" id="Categories">
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
      </select>
    </StyledCategories>
  );
}

export default Categories;
