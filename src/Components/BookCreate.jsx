import React from 'react'
import { useState } from 'react'
import './BookCreate.css'
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('title')
  const [des, setDes] = useState('description')
  const handlChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlChangeDes = (e) => {
    setDes(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const reps = onCreate({
      title,
      des,
    })
  }
  return (
    <div className='form-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input onChange={handlChangeTitle} type="text" id="title" name="title" />
        <input onChange={handlChangeDes} type="text" id="des" name="des" />
        <input type="submit" value="Create" />
      </form>
    </div>
  )
}

export default BookCreate