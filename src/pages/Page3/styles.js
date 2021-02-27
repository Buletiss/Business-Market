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
  color: white;
  position: absolute;
  width: 463px;
  height: 285px;
  left: 384px;
  top: 2724px;

  font-size: 15px;
  line-height: 180%;
`;

export const Title = styled.div`
  font-family: 'Oswald';
  font-size: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 300%;
  margin-top: -150px;
`;

export const Text = styled.div`
  font-family: 'Fira Sans';
  margin-top: 100px;
  width: 463px;
  height: 283px;
`;

export const PrimaryText = styled.strong`
  color: ${(props) => props.theme.colors.primary};
`;

export const LastText = styled.div`
  margin-top: 50px;
`;

export const RightSide = styled.div`
  display: flex;
  width: 50%;
  background: black;
`;
