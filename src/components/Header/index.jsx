import styled from 'styled-components';
import LogoAsset from '../../assets/logo.png';

const Banner = styled.header`
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
  background-color: #161a1d;
  box-sizing: border-box;
`;
const Logo = styled.img`
  height: 128px;
  width: 128px;
  justify-content: left;
`;

const Title = styled.h1`
  color: red;
  font-size: 2em;
`;

const Subtitle = styled.h2``;

const InformationsBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  flex-grow: 3;
`;

function Header() {
  return (
    <Banner>
      <Logo
        src={LogoAsset}
        name="Learn suap logo"
        title="Learn suap logo"
        alt="learn suap logo"
      />
      <InformationsBlock>
        <Title>Learn Suap</Title>
        <Subtitle>
          Un quiz pour tester vos connaissances sur le thème du secours
          d'urgence aux personnes.
        </Subtitle>
      </InformationsBlock>
    </Banner>
  );
}

export default Header;
