import styled from 'styled-components';

import Rectangle from '../../assets/Rectangle.png';

export const Container = styled.div`
  height: 84vh;
  display: flex;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  width: 50%;
  background: linear-gradient(59.46deg, #1d737e -67.96%, #4fb9c7 103.75%);
`;

export const RectangleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -30px;
`;

export const RectangleLeft = styled.img.attrs({
  src: Rectangle,
})``;

export const RectangleRight = styled.img.attrs({
  src: Rectangle,
})`
  margin-left: -230px;
`;

export const TextWrapper = styled.div``;

export const RightSide = styled.div`
  display: flex;
  width: 50%;
  background: black;
`;
