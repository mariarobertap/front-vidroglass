import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import multi from "redux-multi"
import thunk from "redux-thunk"

import promise from 'redux-promise'

import App from './src/main/app'
import reducers from './src/main/reducers'

const store = applyMiddleware(thunk,multi, promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('app'))