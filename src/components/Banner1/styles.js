import styled from 'styled-components';

import BannerBackground from '../../assets/background.png';
import Logo2 from '../../assets/logo2.png';

export const Container = styled.div`
  height: 30vh;
  background-image: url(${BannerBackground});
  background-color: black;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;

  @media screen and (max-width: 768px) {
    background-position: center left 20%;
  }
`;

export const LogoAndTitle = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Oswald';
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    font-size: 10px;
    height: 100px;
    width: 200px;
    margin-left: -100px;
  }
`;

export const Logo = styled.img.attrs({
  src: Logo2,
})`
  margin-right: 3rem;
  @media screen and (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
  }
`;

export const TextWrapper = styled.div`
  width: 60%;
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 180%;
  max-width: 600px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    position: relative;
    left: 80px;
    width: 75%;
  }
`;

export const PrimaryText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;
