import React, { useState, useEffect } from 'react'
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'
import { NavbarA } from './NavbarA'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const UserList = () => {
  const { list: users } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)
  const [name, setName] = useState('mgeovany.dev')

  const handleClose = e => {
    e.preventDefault()
    setShow(false)
  }

  const handleInputName = e => {
    setName(e.target.value)
  }

  const handleShow = () => setShow(true)

  useEffect(() => {
    dispatch(fetchAllUsers())
    handleShow()
  }, [dispatch])
  return (
    <>
      <NavbarA />
      <div className='container '>
        <h1>Bienvenido {name}</h1>
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

      <Modal
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action='' onSubmit={handleClose} className='formulario'>
            <div>
              <label htmlFor='nombre'>Nombre</label>
              <input
                type='text'
                name='nombre'
                placeholder='Nombre'
                id='nombre'
                value={name}
                onChange={handleInputName}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' type='submit' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserList
