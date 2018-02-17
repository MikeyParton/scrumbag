import React from 'react'
import PropTypes from 'prop-types'
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

export const Tile = styled(BaseCard)`
  height: 100px;
`


const BoardTile = (props) => {
  const { name, url } = props
  return (
    <Wrapper>
      <Link to={url}>
        <Tile>
          <CardTitle>{name}</CardTitle>
        </Tile>
      </Link>
    </Wrapper>
  )
}

BoardTile.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default BoardTile
