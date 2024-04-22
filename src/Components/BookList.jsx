
import BookShow from './BookShow'
import './BookList.css'
const BookList = ({ books, onDelete, onEdit, onCancel }) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookShow book={book} onDelete={onDelete} onEdit={onEdit} onCancel={onCancel}/>
      ))}
    </div>
  )
}

export default BookList
