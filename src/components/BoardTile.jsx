import React from 'react'
import { Link } from 'react-router-dom'
import BaseCard from './BaseCard'
import CardTitle from './CardTitle'

const BoardTile = (props) => {
  const { id } = props
  return (
    <Link to={`/boards/${id}`}>
      <BaseCard>
        <CardTitle>Foodle</CardTitle>
      </BaseCard>
    </Link>
  )
}

export default BoardTile
