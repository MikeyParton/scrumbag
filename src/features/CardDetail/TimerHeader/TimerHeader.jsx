import React from 'react'
import { HeaderContainer } from './TimerHeaderStyles'
import Timer from './Timer'
import NewTimer from './NewTimer'

const TimerHeader = (props) => {
  const { id, cardId } = props
  return (
    <HeaderContainer>
      { id
          ? <Timer id={id} />
          : <NewTimer cardId={cardId} />
      }
    </HeaderContainer>
  )
}

export default TimerHeader
