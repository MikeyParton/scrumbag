import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Board from './components/Board'
import configureStore from './state/store'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    )
  }
}

export default App
