import React from 'react'
import { useState } from 'react'
import './BookEdit.css'
const BookEdit = ({ book, onEdit, onCancel }) => {
  const [title, setTitle] = useState(book.title)
  const [des, setDes] = useState(book.des)
  const handlChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlChangeDes = (e) => {
    setDes(e.target.value);
  }
  const handleCancel = () => {
    setTitle(book.title);
    setDes(book.des);
    onCancel();
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, {
      title,
      des,
    })
  }
  return (
    <div className='Form-edit'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input onChange={handlChangeTitle}
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <input onChange={handlChangeDes}
          type="text"
          id="des"
          name="des"
          value={des}
        />
        <input type="submit" value="Save" />
        <button onClick={handleCancel} className='Button_cancel'>Cancel</button>
      </form>
    </div>
  )
}

export default BookEdit