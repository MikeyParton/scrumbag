import React from 'react'
import styled from 'styled-components'
import CircleNotchIcon from 'react-icons/lib/fa/circle-o-notch'
import PlayIcon from 'react-icons/lib/fa/play'
import PauseIcon from 'react-icons/lib/fa/pause'
import CircleIcon from 'react-icons/lib/fa/circle-o'

import { pulseAnimation1, pulseAnimation2, rotateAnimation } from 'common/components/animation'

const CorrectedPlayIcon = styled(PlayIcon)`
  margin-left: 1px;
`

const SmallWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 30px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  ${({ animation, wasActive }) => {
    const animations = [pulseAnimation1, pulseAnimation2]

    if (wasActive !== null) {
      return `animation: ${animations[animation]} 0.25s ease-in-out;`
    }
  }}
`

const InnerIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  height: 40px;
  width: 40px;
`

const SpinningCircle = styled(CircleNotchIcon)`
  animation: ${rotateAnimation} 1s infinite linear;
`

class DrawerButton extends React.Component {
  state = {
    animation: 0,
    wasActive: null,
    active: false
  }

  toggleActive = () => {
    const { animation, active } = this.state
    this.setState({
      animation: animation === 0 ? 1 : 0,
      active: !active,
      wasActive: active
    })
  }

  render() {
    const OuterIcon = this.state.active ? SpinningCircle : CircleIcon
    const InnerIcon = this.state.active ? PauseIcon : CorrectedPlayIcon
    const { active, animation, wasActive } = this.state

    return (
      <div>
        <SmallWrapper
          onClick={this.toggleActive}
          wasActive={wasActive}
          active={active}
          animation={animation}
        >
          <OuterIcon />
          <InnerIconWrapper>
            <InnerIcon />
          </InnerIconWrapper>
        </SmallWrapper>
      </div>
    )
  }
}

export default DrawerButton
