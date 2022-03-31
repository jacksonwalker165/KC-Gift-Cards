import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Cards from './Cards'
import { allGiftCards } from './GiftCards'

const CardGrid = () => {
  return (
    <section className='bg-light bg-gradient pb-5'>
        <Container>
            <Row xl={4} md={3} className='g-lg-5 g-3'>
                {allGiftCards.map(item => (
                    <Cards key={item.id} item={item} />
                ))} 
            </Row>
        </Container>
    </section>
  )
}

export default CardGrid