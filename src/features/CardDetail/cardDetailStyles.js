import styled from 'styled-components'

export const Modal = styled.div`
  border-radius: ${props => props.theme.borderRadius}px;
  position: absolute;
  max-width: 600px;
  width: calc(100vw - 100px);
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: ${props => 2 * props.theme.grid}px;
  background-color: ${props => props.theme.colors.listBackgroundColor};
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25);
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
