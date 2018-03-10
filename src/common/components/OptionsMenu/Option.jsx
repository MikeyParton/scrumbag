import styled from 'styled-components'

const Option = styled.div`
  cursor: pointer;
  color: black;
  margin-left: ${props => -props.theme.grid}px;
  margin-right: ${props => -props.theme.grid}px;
  padding: ${props => props.theme.grid}px;
  ${props => props.bold && 'font-weight: 550;'}

  &:hover {
    background-color: ${props => props.theme.colors.lightBlue};
    color: white;
  }
`

export default Option
