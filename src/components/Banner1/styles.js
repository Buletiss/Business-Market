import styled from 'styled-components';

import BannerBackground from '../../assets/background.png';
import Logo2 from '../../assets/logo2.png';

export const Container = styled.div`
  height: 30vh;
  background-image: url(${BannerBackground});
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const LogoAndTitle = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs({
  src: Logo2,
})`
  margin-right: 3rem;
`;

export const TextWrapper = styled.div`
  width: 60%;
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 180%;

  max-width: 600px;

  // color: primary;
`;

export const PrimaryText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;
