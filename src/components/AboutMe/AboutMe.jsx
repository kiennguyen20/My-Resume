import React, { useState, useEffect } from 'react'
import * as S from './aboutMe.styled'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import BeatLoader from 'react-spinners/BeatLoader'
export default function AboutMe() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Title>SUMARY</S.Title>
          <S.Content>
            My name is Nguyen Trung Kien. I was born in 2000. I am a web
            developer with 3 months of experience in ReactJS framework and 2
            months of NodeJS, Express and mongoDB. My Favorite combo is MERN
            stack (MongoDB, Express, React and NodeJS).
          </S.Content>
          <S.Content>
            Front-End is my strong point. I especially love ReactJS which is a
            really powerful technology. I use ReactJS with its libraries like
            Redux, react-router-dom, Axios,...
          </S.Content>
          <S.Content>
            In Web Suite (HTML, CSS and JS), I love coding with SCSS, and have a
            quite good skill about responsive website.
          </S.Content>
          <S.Content>
            Most of my skills are learn by watching Youtube tutorials, learning
            course (in Udemy and FreeCodeCamp) and reading books (being a big
            fan of O'REILLY) and documents. After learning a new technology, I
            always use it to build a real project. That’s my method which makes
            it easy for me to learn fast.
          </S.Content>
        </S.Left>
        <S.Right>
          <S.Title>CONTACT ME</S.Title>
          <S.RightContent>
            <LocationOnIcon style={{ marginRight: '10px', fontSize: '4rem' }} />
            <S.Info>105 Suoi Loi - Tan Thong Hoi - Cu Chi - TPHCM</S.Info>
          </S.RightContent>
          <S.RightContent>
            <PhoneIphoneIcon
              style={{ marginRight: '10px', fontSize: '3.5rem' }}
            />
            <S.Info>0329 043 512</S.Info>
          </S.RightContent>
          <S.RightContent>
            <EmailIcon style={{ marginRight: '10px', fontSize: '3.5rem' }} />
            <S.Info>nkien5770@gmail.com</S.Info>
          </S.RightContent>
          <S.RightContent>
            <FacebookIcon style={{ marginRight: '10px', fontSize: '3.5rem' }} />
            <S.InfoLink href="https://www.facebook.com/ngtr.kien512/">
              My Facebook
            </S.InfoLink>
          </S.RightContent>
          <S.RightContent>
            <GitHubIcon style={{ marginRight: '10px', fontSize: '3.5rem' }} />
            <S.InfoLink href="https://github.com/">My GitHub</S.InfoLink>
          </S.RightContent>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  )
}
