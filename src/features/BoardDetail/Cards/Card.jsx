import React from 'react'
import { connect } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Label, Avatar } from 'common/components'
import { Flex, Box } from 'grid-styled'
import { makeGetCardById } from 'features/Cards/cardsSelectors'
import { Container, CardWrapper } from './cardStyledComponents'

const mapState = (state, ownProps) => {
  return {
    card: makeGetCardById(ownProps.id)(state)
  }
}

class Card extends React.Component {
  render() {
    const { id, index, card } = this.props

    if (!card) return null

    const {
      name,
      url,
      labels: labelIds,
      users: userIds
    } = card

    return (
      <Draggable
        draggableId={`card-${id}`}
        index={index}
      >
        {provided => (
          <Container>
            <Link to={url}>
              <CardWrapper
                innerRef={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Flex wrap>
                  {labelIds.map(labelId => (
                    <Box mb={2} mr={2}>
                      <Label small key={labelId} id={labelId} />
                    </Box>
                  ))}
                </Flex>
                <Box mb={2}>{name}</Box>
                <Flex justify="flex-end">
                  {userIds.map(userId => (
                    <Box mr={2}>
                      <Avatar small key={userId} id={userId} />
                    </Box>
                  ))}
                </Flex>
              </CardWrapper>
              {provided.placeholder}
            </Link>
          </Container>
        )}
      </Draggable>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    boardSlug: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default connect(mapState, null)(Card)
