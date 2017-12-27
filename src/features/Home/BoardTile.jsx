import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BaseCard from 'common/components/BaseCard'
import CardTitle from 'common/components/CardTitle'

const Wrapper = styled.div`
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }
`

const Tile = styled(BaseCard)`
  height: 100px;
`


const BoardTile = (props) => {
  const { id } = props
  return (
    <Wrapper>
      <Link to={`/boards/${id}`}>
        <Tile>
          <CardTitle>Foodle</CardTitle>
        </Tile>
      </Link>
    </Wrapper>
  )
}

export default BoardTile
