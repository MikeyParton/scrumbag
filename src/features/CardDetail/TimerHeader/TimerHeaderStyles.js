import styled from 'styled-components'

export const HeaderContainer = styled.div`
  margin: ${(props) => {
    const { grid } = props.theme
    const m = 2 * grid
    return `${-m}px ${-m}px ${m}px ${-m}px`
  }};

  border-top-left-radius: ${props => props.theme.borderRadius}px;
  border-top-right-radius: ${props => props.theme.borderRadius}px;

  padding: ${props => 2 * props.theme.grid}px;
  background-color: ${(props) => {
    const { active, theme } = props
    const { success, cardBackgroundLight } = theme.colors
    if (active) return success
    return cardBackgroundLight
  }};
`
