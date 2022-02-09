import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import BookDataService from '../services/book.services'

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks()
  }

  return (
    <>
      <div className='mb-2'>
        <Button variant='dark edit' onClick={getBooks}>
          Refresh List
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>Zola</td>
            <td>Available</td>
            <td>
              <Button variant='secondary' classname='edit' onClick={{}}>
                Edit
              </Button>
              <Button variant='danger' classname='delete' onClick={{}}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default BookList
