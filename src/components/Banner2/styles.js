import styled from 'styled-components';

import StickIcon from '../../assets/stickIcon.png';

export const Container = styled.div`
  height: 30vh;
  display: flex
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;

export const LogoAndTitle = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  font-family: 'Oswald';
  justify-content: space-between;
  text-align: right;
  letter-spacing: 0.1em;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 30%;
    text-align: center;
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

export const TitleWrapper = styled.div`
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const StickImg = styled.img.attrs({
  src: StickIcon,
})`
  margin-left: 10%;
`;

export const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Fira Sans';
  font-style: normal;
  font-size: 13px;
  line-height: 180%;
  padding: 1em em 0em;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 60%;
    margin-left: -100px;
  }
`;
