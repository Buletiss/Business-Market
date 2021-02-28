import styled from 'styled-components';
import Homem from '../../assets/Homem.png';
import FacebookIcon from '../../assets/facebookIcon.png';
import TwitterIcon from '../../assets/twitterIcon.png';
import InstagramIcon from '../../assets/instagramIcon.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  margin-top: -15rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 6rem;
  width: 50%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: -100px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  max-height: 600px;
  padding: 10px 80px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 50%;
    position: relative;
    top: -160px;
    font-size: 15px;
  }
`;

export const HomemImage = styled.img.attrs({
  src: Homem,
})`
  width: 75%;
  margin-bottom: 50px;
  margin-top: -20px;

  @media screen and (max-width: 768px) {
    width: 500px;
    display: flex;
    margin-left: -100px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  margin-left: 14rem;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 2rem;
  }
`;

export const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background: linear-gradient(59.46deg, #1d737e -67.96%, #4fb9c7 103.75%);
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const FacebookLogo = styled.img.attrs({
  src: FacebookIcon,
})``;

export const InstagramLogo = styled.img.attrs({
  src: InstagramIcon,
})``;

export const TwitterLogo = styled.img.attrs({
  src: TwitterIcon,
})``;
