import styled from 'styled-components'

export const Container = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const CardWrapper = styled.div`
  user-select: none;
  padding: ${props => (props.theme.grid * 2)}px;
  margin: 0 0 ${props => props.theme.grid}px 0;
  background-color: grey;
`
