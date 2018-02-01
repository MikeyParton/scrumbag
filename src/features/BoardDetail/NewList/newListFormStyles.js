import styled from 'styled-components'
import { darken } from 'polished'

export const OuterContainer = styled.div`
  padding-right: 100px;
`

export const InnerContainer = styled.div`
  ${(props) => {
    const background = darken(0.1, props.theme.boardBackgroundColor)
    const hoverBackground = darken(0.05, background)

    return `
      cursor: pointer;
      width: 250px;
      color: #f2f2f2;
      border-radius: ${props.theme.borderRadius}px;
      padding: ${props.theme.grid}px;
      background-color: ${background};

      &:hover {
        background-color: ${hoverBackground};
      }
    `
  }}
  `

export const FormContainer = styled.div`
  ${(props) => {
    const background = props.theme.listBackgroundColor

    return `
      width: 250px;
      border-radius: ${props.theme.borderRadius}px;
      padding: ${props.theme.grid}px;
      background-color: ${background};
    `
  }}
  `
