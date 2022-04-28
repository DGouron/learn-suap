import styled from 'styled-components';
import LogoAsset from '../../assets/logo.png';

const Banner = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
`;
const Logo = styled.img`
  height: 128px;
  width: 128px;
  justify-content: left;
`;

const Title = styled.h1`
  font-size: 35px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
`;

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
