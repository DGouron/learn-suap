import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateCategorySelected } from '../store/AnswerManagementActions';

const StyledCategory = styled.option`
  background-color: grey;
  color: white;
`;

function Category(props) {
  const title = props.title;
  const categoryName = props.categoryName;
  const dispatch = useDispatch();

  let isSelected = props.isDefaultSelected ? 'selected' : '';

  return (
    <StyledCategory
      selected={isSelected}
      value={props.categoryName}
      label={title}
      onClick={() => {
        dispatch(updateCategorySelected(categoryName));
      }}
    >
      {title}
    </StyledCategory>
  );
}

export default Category;
