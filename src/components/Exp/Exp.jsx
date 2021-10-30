import React, { useState, useEffect } from 'react'
import * as S from './exp.styled'
import BeatLoader from 'react-spinners/BeatLoader'

export default function Exp() {
  return (
    <S.Container>
      <S.TitleHeader>EXPERIENCE</S.TitleHeader>
      <S.Wrapper>
        <S.ContentContainer>
          <S.ContentTitle>BEA. SHOP Project</S.ContentTitle>
          <S.Desc>
            <span>Project Description:</span> Create an e-commerce website,
            which users can select and order their favorite clothing. Of course,
            It’s just a demo. And I built it to apply for which I learned.
          </S.Desc>
          <S.Desc>
            <span>Team:</span> Only me
          </S.Desc>
          <S.Desc>
            <span>Technology:</span> Frontend: ReactJS + Redux, Webpack.
            Backend: NodeJs, MongoDB, Firebase
          </S.Desc>
          <S.Circle>
            <S.Time>9/2021 - 11/2021</S.Time>
          </S.Circle>
        </S.ContentContainer>
      </S.Wrapper>
    </S.Container>
  )
}
