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
  /* width: 12rem; */
`;

export const RightTriangle = styled.img.attrs({
  src: TriangleRight,
})`
  position: absolute;
  right: 0;
  bottom: 100px;
`;

export const Column1 = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 5rem;
`;

export const LeftTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  margin-top: -2rem;
  justify-content: space-between;
  height: 50vh;

  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  line-height: 155.5%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const PeopleImage = styled.img.attrs({
  src: People,
})`
  @media (min-width: 768px) {
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

  font-family: 'Source Sans Pro'
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 428.2%;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background: ${(props) => props.theme.colors.primary};
`;
