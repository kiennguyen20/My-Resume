import styled from 'styled-components'
import { mobileM, tablet } from '../../reponsive'
import { desktopM } from './../../reponsive'
export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  ${mobileM({ paddingTop: '20px' })}
`
export const TitleHeader = styled.h1`
  color: #ffe100;
  border-bottom: 2px solid;
  ${desktopM({ fontSize: '2rem' })}
  ${mobileM({ fontSize: '1rem' })}
`
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 30px;
  justify-content: space-between;
  margin-left: -30px;
  ${tablet({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '0px'
  })}
  ${mobileM({ paddingTop: '10px' })}
`
export const Content = styled.div`
  background-color: #1a1a1a;
  flex: 1;
  border-radius: 10px;
  margin-left: 30px;
  padding: 20px;
  height: max-content;
  ${desktopM({ fontSize: '2rem' })}
  ${tablet({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    marginLeft: '0px',
    width: '90%'
  })}
  ${mobileM({ fontSize: '1rem' })}
`
export const Title = styled.h3`
  color: #ff0a78;
  margin-bottom: 20px;
  ${desktopM({ fontSize: '2rem' })}
  ${mobileM({ fontSize: '1rem' })}
`
export const InfoContainer = styled.ul`
  color: #b3b3b3;
  margin-left: 30px;
`
export const Info = styled.li`
  margin-bottom: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
  ${desktopM({ fontSize: '2rem' })}
  ${mobileM({ fontSize: '1rem' })}
`
