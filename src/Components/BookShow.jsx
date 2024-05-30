import React, { useState, useEffect } from "react";
import BookEdit from "./BookEdit";
import "./BookShow.css";
import useBookContext from "../hook/useBookContext";

const BookShow = ({ book }) => {
  const image = `https://picsum.photos/seed/${book.id}picsum/200/300`;
  const [isEdit, setIsEdit] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    // Generate random background color when the component renders
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    setBackgroundColor(getRandomColor());
  }, [book.id]); // Ensure a new color is generated when the book changes

  const { onEdit, onDelete } = useBookContext();

  const handleEdit = (id, term) => {
    onEdit(id, term);
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };
  return (
    <div className="item" style={{ backgroundColor }}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2>Title: {book.title}</h2>
          <p>Description: {book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} onCancel={handleCancel} />}
      {!isEdit && (
        <>
          <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
          
        </>
      )}
    </div>
  );
};

export default BookShow;
