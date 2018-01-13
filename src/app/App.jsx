import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './Routes/Routes'
import configureStore from './store'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
