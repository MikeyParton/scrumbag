import styled from 'styled-components'

const grid = 8

export const Container = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: auto;
`

export const Full = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #127ABD;
`
