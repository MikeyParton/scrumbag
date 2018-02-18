import styled from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  ${(props) => {
    const {
      theme,
      buttonType,
      dark,
      block
    } = props

    const backgroundColor = theme.colors[buttonType] || theme.colors.default
    const textColor = dark ? 'grey' : 'white'

    return (`
      display: flex;
      align-items: center;
      color: ${textColor};
      font-weight: 700;
      border-radius: 3px;
      height: 30px;
      border: none;
      background-color: ${backgroundColor};
      ${block ? 'width: 100%;' : ''}

      &:hover {
        background-color: ${darken(0.10, backgroundColor)};
      }
    `)
  }}
  `

export default Button
