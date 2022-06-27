import React from 'react'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import ImagesList from './compononents/UserList'

import { Provider } from 'react-redux'
import store from './store'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
