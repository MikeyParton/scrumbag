import styled from 'styled-components'

const grid = 8

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
`

export const Full = styled.div`
  height: 100%;
  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
