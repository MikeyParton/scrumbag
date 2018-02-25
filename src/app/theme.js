import { lighten, darken } from 'polished'

const mainColors = {
  default: '#b7c3c9',
  navbar: '#026aa7',
  success: '#5aac44',
  error: 'red',
  black: 'black',
  lightBlue: '#5ba4cf',
  white: 'white',
  offwhite: '#f2f2f2',
  listBackground: '#e2e4e6',
  cardBackground: '#edeff0',
  cardBackgroundLight: '#e2e4e6',
  cardBackgroundDark: '#838c91',
  boardBackground: '#127ABD',
  boardBackgroundDark: darken(0.1, '#127ABD')
}

const extraColors = {
  navbarLight: lighten(0.20, mainColors.navbar)
}

const theme = {
  grid: 8,
  borderRadius: 3,
  listBackgroundColor: '#e2e4e6',
  boardBackgroundColor: '#127ABD',
  colors: {
    ...mainColors,
    ...extraColors
  }
}

export default theme
