import { lighten } from 'polished'

const mainColors = {
  default: '#b7c3c9',
  navbar: '#026aa7',
  success: '#5aac44',
  error: 'red',
  white: 'white',
  listBackgroundColor: '#e2e4e6',
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
