import React, { useState } from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import './App.css'

const App = () => {
  const [bookId, setBookId] = useState('')

  const getBookHandler = (id) => {}
  return (
    <>
      <Navbar bg='dark' variant='dark' classname='header'>
        <Container>
          <Navbar.Brand href='#home'>Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: '400px' }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList getBookId={getBookHandler} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
