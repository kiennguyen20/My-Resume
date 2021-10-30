import React, { useState, useEffect } from 'react'
import * as S from './edu.styled'
import SchoolIcon from '@mui/icons-material/School'
import BeatLoader from 'react-spinners/BeatLoader'

export default function Edu() {
  return (
    <S.Container>
      <S.TitleHeader>EDUCATION</S.TitleHeader>
      <S.Wrapper>
        <S.Circle>
          <SchoolIcon style={{ fontSize: '10rem' }} />
        </S.Circle>
        <S.ContentContainer>
          <S.Content>
            <p>I’m currently a Senior of Nguyen Tat Thanh University (NTTU)</p>
          </S.Content>
          <S.Status>Status: Undergraduate</S.Status>
        </S.ContentContainer>
      </S.Wrapper>
    </S.Container>
  )
}
