import styled from 'styled-components'
import { mobileM } from '../../reponsive'
export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  ${mobileM({ paddingTop: '20px' })}
`
export const TitleHeader = styled.h1`
  color: #ffe100;
  border-bottom: 2px solid;
  margin-bottom: 100px;
  ${mobileM({ fontSize: '1rem', marginBottom: '60px' })}
`
export const Wrapper = styled.div`
  width: 50%;
  color: #fff;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobileM({ width: '80%' })}
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  padding-top: 100px;
  ${mobileM({ fontSize: '1rem', padding: '60px 20px 20px 20px' })}
`
export const Circle = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  border-radius: 50%;
  border: 7px solid black;
  position: absolute;
  top: -75px;
  ${mobileM({ width: '100px', height: '100px', top: '-50px' })}
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
  ${mobileM({ fontSize: '1rem' })}
`
export const Status = styled.div`
  margin-bottom: 20px;
  color: #999999;
  ${mobileM({ fontSize: '1rem' })}
`
