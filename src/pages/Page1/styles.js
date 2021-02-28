import styled from 'styled-components';
import TriangleLeft from '../../assets/triangleLeft.png';
import TriangleRight from '../../assets/triangleRight.png';

import People from '../../assets/Mask Group.png';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
`;

export const LeftTriangle = styled.img.attrs({
  src: TriangleLeft,
})`
  position: absolute;
  left: 0;

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

export const RightTriangle = styled.img.attrs({
  src: TriangleRight,
})`
  position: absolute;
  right: 0;
  bottom: 100px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Column1 = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 10px 300px 20px;
  }
`;

export const TitleTopWrapper = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  justify-content: space-between;
  font-family: Oswald;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    width: 120%;
  }
`;

export const TextTopWrapper = styled.div`
  position: relative;
  left: -100px;
  width: 500px;
  padding: 50px 0px 100px 0px;
  font-family: 'Fira Sans'
  font-size: 13px;
  line-height: 180%
`;

export const StyledTitle = styled.strong`
  color: ${(props) => props.theme.colors.primary};
  background-color: black;
  border-radius: 8px;
`;

export const PeopleImage = styled.img.attrs({
  src: People,
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Column2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: 482px;
  height: 60px;
  border: 0;
  border-radius: 30px;
  position: relative;
  left: -120px;
  font-family: 'Source Sans Pro'
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 428.2%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.primary};
`;
