import React from 'react'
import { Form, Alert, InputGroup, Button, ButtonGroup } from 'react-bootstrap'
import BookDataService from '../services/book.services'

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('Available')
  const [flag, setFlag] = useState(true)
  const [message, setMessage] = useState({ error: false, msg: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    if (title === '' && author === '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' })
      return
    }

    const newBook = { title, author, status }
    console.log(newBook)

    try {
      await BookDataService.addBooks(newBook)
      setMessage({ error: false, msg: 'New Book added successfully.' })
    } catch (err) {
      setMessage({ error: true, msg: err.message })
    }

    setTitle('')
    setAuthor('')
  }
  return (
    <div className='p-4 box'>
      {message?.msg && (
        <Alert
          variant={message?.error ? 'danger' : 'success'}
          dismissible
          onClose={() => setMessage('')}
        >
          {message?.msg}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group classname='mb-3' controlId='formBookTitle'>
          <InputGroup>
            <InputGroup.Text id='formBookTitle'>B</InputGroup.Text>
          </InputGroup>
          <Form.Control
            type='text'
            placeholder='Book Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group classname='mb-3' controlId='formBookAuthor'>
          <InputGroup>
            <InputGroup.Text id='formBookAuthor'>A</InputGroup.Text>
          </InputGroup>
          <Form.Control
            type='text'
            placeholder='Book Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <ButtonGroup className='mb-3'>
          <Button
            disabled={flag}
            variant='success'
            onClick={(e) => {
              setStatus('Available')
              setFlag(true)
            }}
          >
            Available
          </Button>
          <Button
            disabled={!flag}
            variant='danger'
            onClick={(e) => {
              setStatus('Not Available')
              setFlag(false)
            }}
          >
            Not Available
          </Button>
        </ButtonGroup>
        <div classname='d-grid gap-2'>
          <Button variant='primary' type='submit'>
            Add/Update
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddBook
