import React from 'react';
import * as S from './styles';

export default function Navbar() {
  return (
    <S.Container>
      <S.Logo />
      <S.ButtonsContainer>
        <S.ButtonMoreInfo>MAIS INFORMAÇÕES</S.ButtonMoreInfo>
        <S.HamburguerButton />
      </S.ButtonsContainer>
    </S.Container>
  );
}
