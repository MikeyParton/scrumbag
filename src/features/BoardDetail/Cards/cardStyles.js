import styled from 'styled-components'

const grid = 8

export const OuterContainer = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  margin-bottom: ${grid}px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  padding: ${grid * 2}px;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgreen' : 'white')};
  user-select: none;
`
