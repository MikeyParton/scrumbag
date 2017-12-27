import styled from 'styled-components'

const grid = 8

export const Container = styled.div`
  margin-bottom: ${grid}px;
  padding: ${grid * 2}px;
  background-color: ${({ isDragging }) => (isDragging ? 'lightgreen' : 'grey')};
  user-select: none;
`
