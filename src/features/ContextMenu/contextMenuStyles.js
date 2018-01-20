import styled from 'styled-components'
import CloseIcon from 'react-icons/lib/md/close'

export const MenuContainer = styled.div`
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25);
`

export const Header = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  font-size: 14px;
  color: #838c91;
  border-bottom: 1px solid #d6dadc;
  margin-bottom: 10px;
`

export const Title = styled.div`
  flex-grow: 1;
  text-align: center;
`

export const CloseButton = styled(CloseIcon)`
  flex-shrink: 0;
  font-size: 20px;
  cursor: pointer;
`
