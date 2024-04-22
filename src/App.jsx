
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import { useState, useEffect } from 'react'
import './App.css'
import { fetchBook, createBook, deleteBook, updateBook } from './api'

const App = () => {
  const [books, setBooks] = useState([])

  const handleCreate = async (term) => {
    const book = await createBook(term)
    if (book) setBooks([...books, book])
  }
  const handleDelete = async (id) => {
    const book = await deleteBook(id)
    setBooks(books.filter((item) => item.id !== book.id))
  }
  const handleUpdate = async (id, term) => {
    const book = await updateBook(id, term)
    setBooks(
      books.map((item) => item.id === book.id ? book : item)
    )
  }
  useEffect(async () => {
    const tams = await fetchBook()
    setBooks(tams)
  }, [])
  return (
    <div className='wrapper'>
      <div className="container">

        <h1>Reading Book</h1>
        <div>
          <BookList books={books} onDelete={handleDelete} onEdit={handleUpdate} onCancel={handleUpdate}/>
        </div>
      </div>
      <BookCreate onCreate={handleCreate} />
    </div>
  )
}

export default App