import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import Routes from './Routes/Routes'
import theme from './theme'
import configureStore from './store'

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

const store = configureStore()

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
