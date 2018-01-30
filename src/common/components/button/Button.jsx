import styled from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  ${({ buttonType, theme }) => {
    const backgroundColor = theme.colors[buttonType]

    return (`
      display: flex;
      align-items: center;
      color: white;
      font-weight: 700;
      border-radius: 3px;
      height: 30px;
      border: none;
      background-color: ${backgroundColor};

      &:hover {
        background-color: ${darken(0.10, backgroundColor)};
      }
    `)
  }}
  `

export default Button
