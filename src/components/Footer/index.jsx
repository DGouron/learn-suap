import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding-right: 2%;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  margin-right: auto;
  margin-left: auto;
  border-bottom-style: solid;
  background-color: rgba(34, 34, 34, 1);
  box-sizing: border-box;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Copyright Damien Gouron - 2022</p>
    </StyledFooter>
  );
}

export default Footer;
