import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux'

export const NavbarA = () => {
  const { value } = useSelector(state => state.guests)

  return (
    <>
      <Navbar bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>Go Home</Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </>
  )
}
