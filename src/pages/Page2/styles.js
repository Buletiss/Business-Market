import styled from 'styled-components';
import Homem from '../../assets/Homem.png';
import TriangleGreen from '../../assets/triangleGreen.png';
import FacebookIcon from '../../assets/facebookIcon.png';
import TwitterIcon from '../../assets/twitterIcon.png';
import InstagramIcon from '../../assets/instagramIcon.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  margin-top: -15rem;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 6rem;
  width: 50%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  flex: 1;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  max-height: 600px;
  padding: 10px 80px;
`;

export const HomemImage = styled.img.attrs({
  src: Homem,
})`
  width: 459px;
  height: 543px;
  z-index: 100;
  position: relative;
`;

export const HomemAbsoluteTriangle = styled.img.attrs({
  src: TriangleGreen,
})`
  position: absolute;
  left: 15rem;
  bottom: -35rem;
  z-index: 1;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-left: 8rem;
  justify-content: space-around;
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
