import styled from 'styled-components'

export const Modal = styled.div`
  border-radius: 10px;
  position: absolute;
  max-width: 600px;
  width: calc(100vw - 100px);
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: white;
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
