import styled from 'styled-components';

import Rectangle from '../../assets/Rectangle.png';
import LineGreen from '../../assets/faixaVerde.png';

export const Container = styled.div`
  height: 84vh;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  width: 50%;
  background: linear-gradient(59.46deg, #1d737e -67.96%, #4fb9c7 103.75%);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RectangleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -90px;
`;

export const RectangleLeft = styled.img.attrs({
  src: Rectangle,
})``;

export const RectangleRight = styled.img.attrs({
  src: Rectangle,
})`
  margin-left: -250px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 15px;
  line-height: 180%;

  @media screen and (max-width: 768px) {
    line-height: 180%;
    margin-left: -100px;
  }
`;

export const Title = styled.div`
  font-family: 'Oswald';
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 300%;
  margin-top: -150px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
    line-height: 250%;
  }
`;

export const Text = styled.div`
  font-family: 'Fira Sans';
  margin-top: 100px;
  width: 463px;

  @media screen and (max-width: 768px) {
    width: 463px;
    margin-top: 30px;
  }
`;

export const PrimaryText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;

export const LastText = styled.div`
  margin-top: 50px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: black;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TitleRight = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 140px;
  margin-left: -200px;
  letter-spacing: 0.2em;
  font-size: 13px;
  font-family: 'Oswald';
`;

export const FaixaVerde = styled.img.attrs({
  src: LineGreen,
})``;

export const TimeLineWrapper = styled.div``;

export const TimelineDot = styled.div`
  background: red;
`;
