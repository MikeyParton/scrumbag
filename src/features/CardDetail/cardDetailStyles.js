import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0,0,0,0.5);
`

export const Modal = styled.div`
  border-radius: ${props => props.theme.borderRadius}px;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 600px;
  width: calc(100vw - 100px);
  z-index: 100;
  padding: ${props => 2 * props.theme.grid}px;
  background-color: ${props => props.theme.colors.listBackgroundColor};
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25);
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CardBody = styled.div`
  display: flex;
`

export const Content = styled.div`
  flex-grow: 1;
  margin-right: 20px;
`

export const Actions = styled.div`
  width: 100px;
  flex-shrink: 0;
`
