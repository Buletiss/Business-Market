import styled from 'styled-components';
import Hamburguer from '../../assets/Hamburguer.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
  }
`;

export const Logo = styled.img.attrs({
  src:
    'https://media.discordapp.net/attachments/263762535763673089/814667980947324928/TriangleLogo.png',
})``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20%;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: -80px;
    width: 40%;
  }
`;

export const ButtonMoreInfo = styled.button`
  width: 219px;
  height: 60px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 57px;
  color: ${(props) => props.theme.colors.primary};
  border: 0;
  font-family: Source Sans Pro;

  &:hover {
    cursor: pointer;
  }
`;

export const HamburguerButton = styled.img.attrs({
  src: Hamburguer,
})`
  width: 42.09px;
  height: 24.58px;

  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
