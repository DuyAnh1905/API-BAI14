import BookEdit from "./BookEdit";
import { useState } from "react";
import './BookShow.css'
const BookShow = ({ book, onDelete, onEdit, onCancel }) => {
  const image = `https://picsum.photos/seed/${book.id}picsum/200/300`
  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (id, term) => {
    onEdit(id, term)
    setIsEdit(false)
  }
  const handleCancel = () => {
    setIsEdit(false)
  }
  return (
    <div className="item">
      <div className="image">

        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2>Title :{book.title}</h2>
          <p>des :{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} onCancel={handleCancel}/>}
      {!isEdit && (

        <>
          <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </>
      )}
    </div>
  )
}

export default BookShow;