import styled from 'styled-components'
import { mobileL, mobileM } from './../../reponsive'

export const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 30px;
  justify-content: space-between;
  ${mobileL({ display: 'flex', flexDirection: 'column', padding: '30px 0px' })}
`
export const Left = styled.div`
  height: max-content;
  background-color: #1a1a1a;
  flex: 2;
  margin-right: 30px;
  border-radius: 10px;
  padding: 20px;
  ${mobileL({ width: '100%', marginBottom: '20px' })}
`
export const Title = styled.h1`
  color: #ffe100;
  border-bottom: 2px solid;
  ${mobileM({ fontSize: '1rem' })}
`
export const Content = styled.p`
  margin-bottom: 20px;
  color: #b3b3b3;
  font-size: 1.5rem;
  ${mobileM({ fontSize: '1rem' })}
`
export const Right = styled.div`
  flex: 1;
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  height: max-content;
`
export const RightContent = styled.div`
  display: flex;
  color: #b3b3b3;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
  ${mobileM({ fontSize: '1rem' })}
`
export const Info = styled.span``
export const InfoLink = styled.a`
  color: #ff0a78;
`
