import React from 'react';

import * as S from './styles';

const Banner1 = () => {
  return (
    <S.Container>
      <S.LogoAndTitle>
        <S.Logo />
        <h1>
          LOREM IPSUM <br /> LOREM IPSUM TO MAKE <br /> TYPEBOOK
        </h1>
      </S.LogoAndTitle>
      <S.TextWrapper>
        <p>
          <S.PrimaryText>Lorem Ipsum</S.PrimaryText> to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </S.TextWrapper>
    </S.Container>
  );
};

export default Banner1;
