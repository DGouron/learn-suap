import styled from 'styled-components';

const StyledCategories = styled.div``;
function Categories() {
  return (
    <StyledCategories>
      <select>
        <option value="All">- Toutes les questions</option>
        <option value="Promp-secours">
          - Questions Equipier promp-secours
        </option>
        <option value="SUAP">- Questions Equipier SUAP</option>
      </select>
    </StyledCategories>
  );
}

export default Categories;
