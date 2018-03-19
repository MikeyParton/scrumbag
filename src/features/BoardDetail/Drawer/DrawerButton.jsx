import React from 'react'
import styled from 'styled-components'
import CircleNotchIcon from 'react-icons/lib/fa/circle-o-notch'
import PlayIcon from 'react-icons/lib/fa/play'
import PauseIcon from 'react-icons/lib/fa/pause'
import CircleIcon from 'react-icons/lib/fa/circle-o'

import { pulseAnimation1, pulseAnimation2, rotateAnimation } from 'common/components/animation'

const CorrectedPlayIcon = styled(PlayIcon)`
  margin-left: 2px;
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

  isActive = () => {
    const { active: stateActive } = this.state
    const { active: propsActive } = this.props
    const active = propsActive === null ? stateActive : propsActive
    return active
  }

  toggleActive = () => {
    const { animation } = this.state

    if (this.isActive()) {
      this.deactivate()
    } else {
      this.activate()
    }

    this.setState({ animation: (animation + 1) % 1, })
  }

  activate = () => {
    const { onActivate } = this.props

    this.setState({
      active: true,
      wasActive: false
    })

    onActivate()
  }

  deactivate = () => {
    const { onDeactivate } = this.props

    this.setState({
      active: false,
      wasActive: true
    })

    onDeactivate()
  }

  render() {
    const { animation, wasActive } = this.state
    const active = this.isActive()
    const OuterIcon = active ? SpinningCircle : CircleIcon
    const InnerIcon = active ? PauseIcon : CorrectedPlayIcon

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

DrawerButton.defaultProps = {
  onDeactivate: () => {},
  onActivate: () => {}
}

export default DrawerButton
