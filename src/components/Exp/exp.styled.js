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
  padding-bottom: 100px;
  ${mobileM({ paddingTop: '20px' })}
`
export const TitleHeader = styled.h1`
  color: #ffe100;
  border-bottom: 2px solid;
  ${mobileM({ fontSize: '1rem' })}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContentContainer = styled.div`
  color: white;
  width: 50%;
  background-color: #1a1a1a;
  padding: 20px 20px 20px 100px;
  border-radius: 20px;
  position: relative;
  ${mobileM({ width: '70%', padding: '10px 10px 10px 60px' })}
`
export const ContentTitle = styled.h3`
  margin-bottom: 20px;
  color: #ff0a78;
  ${mobileM({ fontSize: '1rem' })}
`
export const Desc = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  span {
    color: yellow;
    font-size: 1.5rem;
    font-weight: 600;
    ${mobileM({ fontSize: '1rem' })}
  }
  ${mobileM({ fontSize: '1rem' })}
`
export const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  position: absolute;
  left: -75px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: #1a1a1a;
  ${mobileM({ width: '100px', height: '100px', left: '-50px' })}
`
export const Time = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  ${mobileM({ fontSize: '1rem' })}
`
