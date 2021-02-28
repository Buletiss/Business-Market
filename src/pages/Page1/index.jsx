import React from 'react';
import Navbar from '../../components/Navbar';
import * as S from './styles';

const Page1 = () => {
  return (
    <>
      <Navbar />
      <S.Container>
        <S.LeftTriangle />
        <S.RightTriangle />
        <S.RightTriangle />
        <S.Column1>
          <S.TitleTopWrapper>
            <h1>
              standard Lorem Ipsum <br/> <S.StyledTitle> Excepteur sint occaec </S.StyledTitle><br/>Lorem ipsum dolor sit
              ame onsectetur adipiscing elit<br/>dolore eu fugiat nulla pariatur!
            </h1>
          </S.TitleTopWrapper>
          <S.TextTopWrapper>
            <p>
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            </S.TextTopWrapper>
            <S.Button>Lorem ipsum idolor</S.Button>
        </S.Column1>
        <S.Column2>
          <S.PeopleImage />
        </S.Column2>
      </S.Container>
    </>
  );
};

export default Page1;
