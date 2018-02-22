import styled from 'styled-components'
import { darken } from 'polished'

export const ButtonContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  padding: ${props => props.theme.grid}px;
  margin-right: -${props => props.theme.grid}px;
  margin-left: -${props => props.theme.grid}px;
  margin-bottom: -${props => props.theme.grid}px;
  border-bottom-right-radius: ${props => props.theme.borderRadius}px;
  border-bottom-left-radius: ${props => props.theme.borderRadius}px;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.colors.listBackground)}
  }
`
