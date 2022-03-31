import React from 'react'
import { Container } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className='py-5 bg-light bg-gradient text-start'>
        <Container>
           <h4 className=''>Description:</h4>
           <p>This app simply displays a grid of gift cards and the currencies which they can be exchanged for.....</p>
        </Container>
    </section>
  )
}

export default Hero