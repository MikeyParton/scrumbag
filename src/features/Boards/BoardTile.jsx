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
  const { id, name } = props
  return (
    <Wrapper>
      <Link to={`/boards/${id}`}>
        <Tile>
          <CardTitle>{name}</CardTitle>
        </Tile>
      </Link>
    </Wrapper>
  )
}

export default BoardTile
