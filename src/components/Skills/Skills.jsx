import React, { useState, useEffect } from 'react'
import * as S from './skills.styled'

export default function Skills() {
  return (
    <S.Container>
      <S.TitleHeader>MY SKILLS</S.TitleHeader>
      <S.Wrapper>
        <S.Content>
          <S.Title>PROGRAMING LANGUAGES</S.Title>
          <S.InfoContainer>
            <S.Info>Javasript</S.Info>
            <S.Info>Web Suite (HTML, CSS, SCSS)</S.Info>
            <S.Info>C#</S.Info>
          </S.InfoContainer>
          <S.Title>FRAMEWORKS</S.Title>
          <S.InfoContainer>
            <S.Info>ReactJS</S.Info>
            <S.Info>NodeJS, Express</S.Info>
          </S.InfoContainer>
        </S.Content>
        <S.Content>
          <S.Title>DATABASE</S.Title>
          <S.InfoContainer>
            <S.Info>MONGODB</S.Info>
            <S.Info>SQL SEVER</S.Info>
          </S.InfoContainer>
          <S.Title>VERSION CONTROL</S.Title>
          <S.InfoContainer>
            <S.Info>Git</S.Info>
            <S.Info>Git Hub</S.Info>
          </S.InfoContainer>
          <S.Title>CODE EDITOR</S.Title>
          <S.InfoContainer>
            <S.Info>Visual Studio Code</S.Info>
            <S.Info>Sublime Text</S.Info>
          </S.InfoContainer>
        </S.Content>
        <S.Content>
          <S.Title>ENGLISH SKILL</S.Title>
          <S.InfoContainer>
            <S.Info>Able to read foreign books and documents</S.Info>
            <S.Info>Quite good at listening</S.Info>
          </S.InfoContainer>
          <S.Title>KNOWLEDGE</S.Title>
          <S.InfoContainer>
            <S.Info>RESTful API</S.Info>
            <S.Info>Responsive</S.Info>
            <S.Info>Clean code</S.Info>
          </S.InfoContainer>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}
