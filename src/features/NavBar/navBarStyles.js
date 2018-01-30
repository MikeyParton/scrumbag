import styled from 'styled-components'

export const Bar = styled.div`
  padding: 0 ${props => 2 * props.theme.grid}px;
  height: 40px;
  background-color: ${props => props.theme.colors.navbar};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`

export const End = styled.div`
  width: 200px;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
`

export const Brand = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    color: white;
    text-decoration: none;
  }

  .text {
    margin-top: 5px;
  }

  .moneybags {
    font-size: 28px;
  }
`
