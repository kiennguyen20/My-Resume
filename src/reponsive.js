import { css } from 'styled-components'
export const mobile = props => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props};
    }
  `
}
export const tablet = props => {
  return css`
    @media screen and (max-width: 768px) {
      ${props};
    }
  `
}
export const mobileL = props => {
  return css`
    @media screen and (max-width: 679px) {
      ${props};
    }
  `
}
export const mobileM = props => {
  return css`
    @media screen and (max-width: 487px) {
      ${props};
    }
  `
}
export const desktopM = props => {
  return css`
    @media screen and (max-width: 2560px) {
      ${props};
    }
  `
}
