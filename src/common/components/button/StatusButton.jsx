import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LoadingIcon from 'react-icons/lib/fa/spinner'
import TickIcon from 'react-icons/lib/fa/check'
import Button from './Button'

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

const StatusButton = ({ status, children, ...rest }) => {
  const Icon = iconsTable[status]
  return (
    <Button {...rest}>
      <MainWrapper>
        {children}
      </MainWrapper>
      <IconWrapper>
        { Icon && <Icon /> }
      </IconWrapper>
    </Button>
  )
}

StatusButton.propTypes = {
  children: PropTypes.element.isRequired,
  status: PropTypes.string.isRequired
}

export default StatusButton
