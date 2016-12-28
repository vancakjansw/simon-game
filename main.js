import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import reducer from './app/reducers'
import ConnectedApp from './app/components/app-container'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  })

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedApp/>
      </Provider>
    )
  }
}
