import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import LoadingIcon from 'react-icons/lib/fa/spinner'
import TickIcon from 'react-icons/lib/fa/check'

const colors = {
  success: '#5aac44'
}

export const Button = styled.button`
  ${({ buttonType }) => {
    const backgroundColor = colors[buttonType]

    return (`
      display: flex;
      align-items: center;
      color: white;
      font-weight: 700;
      border-radius: 3px;
      height: 36px;
      border: none;
      background-color: ${backgroundColor};

      &:hover {
        background-color: ${darken(0.10, backgroundColor)};
      }
    `)
  }}
`

const MainWrapper = styled.div`
  padding: 0 0 0 30px;
`

const IconWrapper = styled.div`
  width: 30px;
  text-align: center;
  position: relative;
`

const Loading = styled(LoadingIcon)`
  animation:spin 1s linear infinite;
  @keyframes spin { 100% { transform:rotate(360deg); } }
`

const iconsTable = {
  busy: Loading,
  done: TickIcon
}

export const StatusButton = (props) => {
  const Icon = iconsTable[props.status]
  return (
    <Button {...props}>
      <MainWrapper>
        {props.children}
      </MainWrapper>
      <IconWrapper>
        { Icon && <Icon /> }
      </IconWrapper>
    </Button>
  )
}
