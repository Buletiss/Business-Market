import React from 'react'

import * as S from './styles'

const Page3 = () => {
  return(
  <S.Container>
    <S.LeftSide>
      <S.RectangleWrapper>
      <S.RectangleLeft />
      <S.RectangleRight />
      <S.TextWrapper>
        <S.Title>
        <h1>type specimen book. It <br/>has survive</h1>
        </S.Title>
        <S.Text>
        <p>
          <S.PrimaryText>Lorem Ipsum dolor </S.PrimaryText> 
           to make a type specimen book. 
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s 
          with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.
        </p> 
         <S.LastText>
            publishing software like Aldus PageMaker 
            including versions of Lorem Ipsum
        </S.LastText>
          </S.Text>
      </S.TextWrapper>
      </S.RectangleWrapper>
    </S.LeftSide>
    <S.RightSide></S.RightSide>
  </S.Container>
  )
}

export default Page3