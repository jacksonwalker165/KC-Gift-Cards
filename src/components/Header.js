import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar className='bg-secondary bg-gradient py-3 '>
            <Container>
                <Navbar.Brand href='#' className='text-white fs-2 fw-light'>Gift Card Task</Navbar.Brand>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header