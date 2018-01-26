import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  flex-grow: 1;
  padding: ${props => props.theme.grid * 2}px 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.theme.boardBackgroundColor};
`

export const Header = styled.div`
  padding-bottom: ${props => props.theme.grid * 2}px;
  border-bottom: 1px black;
  text-align: center;
`

export const Container = styled.div`
  background-color: white;
  width: 300px;
  border-radius: ${props => props.theme.borderRadius}px;
  padding: ${props => props.theme.grid * 2}px;
`
