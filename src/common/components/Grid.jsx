import React from 'react'
import { Flex, Box } from 'grid-styled'
import { withTheme } from 'styled-components'

export const Row = withTheme(props => (
  <Flex
    {...props}
    mx="-8px"
  />
))

export const Col = withTheme(props => (
  <Box
    {...props}
    px="8px"
    flex="1 1 auto"
  />
))
