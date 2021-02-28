import React from 'react';

import * as S from './styles';

const Page2 = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.HomemImage />
        <S.SocialMediaWrapper>
          <S.IconWrapper>
            <S.FacebookLogo />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.InstagramLogo />
          </S.IconWrapper>
          <S.IconWrapper>
            <S.TwitterLogo />
          </S.IconWrapper>
        </S.SocialMediaWrapper>
      </S.LeftSide>
      <S.RightSide>
        <span>
          Meu nome é <strong>lorem ipsum</strong>
        </span>
        <br />
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </h2>
        <br />
        <p>
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum. to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker
        </p>
        <b>more recently with desktop</b>
      </S.RightSide>
    </S.Container>
  );
};

export default Page2;
