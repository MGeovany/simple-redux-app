import './App.css'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGuest } from './store/slices/guests'
import Button from 'react-bootstrap/Button'
import UserList from './compononents/UserList'

function App() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const guests = useSelector(state => state.guests.value)
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addGuest(name))
    setName('')
  }
  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      {guests ? (
        <div>
          <UserList />
        </div>
      ) : (
        <div>
          <div className='App'>
            <span style={{ padding: '1.5rem 0 ' }}>Hello World!</span>
            <span>🐜</span>
            <br />
            <form onSubmit={handleSubmit}>
              <div className='input-group mb-3'>
                <div className='input-group-prepend'>
                  <span
                    className='input-group-text'
                    id='inputGroup-sizing-default'
                  >
                    Enter your Name
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Default'
                  value={name}
                  onChange={e => handleChange(e)}
                  aria-describedby='inputGroup-sizing-default'
                />
              </div>
              <Button
                type='submit'
                className='btn btn-primary'
                variant='light'
                style={{ color: '#333', fontweight: 'bold' }}
              >
                Go Inside
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
