import React from 'react'
import ReactDOM from 'react-dom'
import 'app/index.css'
import App from 'app/App'
import registerServiceWorker from './registerServiceWorker'

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
