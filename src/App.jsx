import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Board from './pages/Board'
import configureStore from './state/store'


const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Board />
        </Router>
      </Provider>
    )
  }
}

export default App
