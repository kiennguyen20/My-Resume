import React from 'react'
import * as S from './header.styled'
import DownloadIcon from '@mui/icons-material/Download'
import { path } from './../../constants/path'
export default function Header() {
  // const activeStyle = {
  //   backgroundColor: 'yellow',
  //   color: 'black'
  // }
  return (
    <S.Header>
      <S.Container className="Container">
        <S.Wrapper>
          <S.CoverContainer>
            <S.Cover>
              <S.CoverImg src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
              <S.Avatar>
                <S.AvatarImg src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/91899686_2607446172877499_6401062495947063296_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=ndE_mBdvEawAX_CqSIL&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT-kWLy7mND83-CFwISGFvNmAzkgw6lTDP4lPNpF_mHwjQ&oe=622A77E4" />
              </S.Avatar>
            </S.Cover>
            <S.TitleHeader>
              <S.Name>NGUYEN TRUNG KIEN</S.Name>
              <S.Desc>- Hi, I'm A Front-End Web Developer -</S.Desc>
            </S.TitleHeader>
          </S.CoverContainer>
          <S.Navbar>
            <S.StyleNavLink to={path.about} activeClassName="any">
              About Me
            </S.StyleNavLink>
            <S.StyleNavLink to={path.myskills} activeClassName="any">
              My Skills
            </S.StyleNavLink>
            <S.StyleNavLink to={path.experience} activeClassName="any">
              Experience
            </S.StyleNavLink>
            <S.StyleNavLink to={path.education} activeClassName="any">
              Education
            </S.StyleNavLink>

            <S.Download
              href="https://drive.google.com/file/d/1qGVkysORw0i7ISAmAPTVAVLtEssS2KJl/view?usp=sharing"
              target="_blank"
            >
              <S.IconButton>
                <DownloadIcon />
              </S.IconButton>{' '}
              Download CV
            </S.Download>
          </S.Navbar>
        </S.Wrapper>
      </S.Container>
    </S.Header>
  )
}
