import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { mobileM, tablet } from '../../reponsive'
import { mobileL } from './../../reponsive'

export const Header = styled.header`
  box-shadow: 0 6px 6px rgb(0 0 0 / 6%);
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  background-image: linear-gradient(to top, #1a1a1a, #b0b1b1);
  ${mobileM({ height: '500px' })}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`
export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
export const Cover = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  z-index: 1;
  ${mobileM({ height: '250px' })}
`
export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 30px 30px;
  object-fit: cover;
`
export const Avatar = styled.div`
  position: absolute;
  z-index: 2;
  width: 150px;
  height: 150px;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`
export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid #404040;
  object-fit: cover;
`
export const TitleHeader = styled.div`
  color: white;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`
export const Name = styled.h1`
  ${mobileM({ fontSize: '1rem' })}
`
export const Desc = styled.p`
  ${mobileM({ fontSize: '1rem' })}
`
export const Navbar = styled.div`
  width: 95%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #404040;
  position: relative;
  ${mobileM({ flexWrap: 'wrap', height: '150px' })}
`

export const StyleNavLink = styled(NavLink)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  transition: all 1s ease;
  border-radius: 10px;
  outline: 10px;
  &:hover {
    background-color: #333333;
  }
  &.${props => props.activeClassName} {
    background-color: #ff0a78;
  }
  ${tablet({ marginRight: '5px', width: '20%', fontSize: '1.2rem' })}
  ${mobileL({ marginRight: '5px', width: '20%' })}
  ${mobileM({ fontSize: '1rem', width: '20%', height: '40%' })}
`
export const Download = styled.button`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: #404040;
  color: #fff;
  padding: 10px;
  transition: all 0.5s ease;
  margin-left: 20px;
  &:hover {
    background-color: #8c8c8c;
  }
  ${mobileM({ flex: '1', height: '40%', marginLeft: '0px' })}
`
export const IconButton = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 5px;
`
