import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todoAppRootReducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import axios from 'axios'

const middleware = applyMiddleware(thunk)
const store = createStore(
  todoAppRootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch((dispatch) =>{
  dispatch({type: "FETCH_USERS_START"})
  axios.get("http://rest.learncode.academy/api/wstern/users")
    .then((response) => {
      dispatch({type: "RECEIVE_USERS", payload: response.data})
    })
})
