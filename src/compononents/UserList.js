import React, { useState, useEffect } from 'react'
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarA } from './NavbarA'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Formik, Form } from 'formik'

const UserList = () => {
  const { list: users } = useSelector(state => state.users)
  const guests = useSelector(state => state.guests.value)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <>
      <NavbarA />
      <div className='container '>
        <h1>
          Bienvenido{' '}
          <strong style={{ fontStyle: 'italic', color: '#3bc7eb' }}>
            {guests}
          </strong>
        </h1>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          {users.map((user, index) => (
            <div key={index} className='col-md-3 mb-4'>
              <div className='card'>
                <img src={user.avatar} alt='avatar' />
                <div className='card-body'>
                  <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                  <p className='card-text'>{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UserList
