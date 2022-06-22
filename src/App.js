import './App.css'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGuest } from './store/slices/guests'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <>
      <div className='App'>
        <span style={{ padding: '1.5rem 0 ' }}>Hello World!</span>
        <span>🐜</span>
        <Link to='/home'>
          <Button
            type='button'
            className='btn btn-primary'
            variant='light'
            style={{ color: '#333', fontweight: 'bold' }}
          >
            Go Inside
          </Button>
        </Link>
      </div>
    </>
  )
}

export default App
