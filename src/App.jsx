import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from 'app/Routes'
import configureStore from './state/store'


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
