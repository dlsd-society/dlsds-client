import React from "react";
import "./BookSessionModal.css";
import BookSessionPage from "../BookSessionForm/BookSessionForm";

const BookSessionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <div className="close-btn" onClick={onClose}>&times;</div>

        <h2>Book A Free Session</h2>
        
        <BookSessionPage onClose={onClose} />

      </div>
    </div>
  );
};

export default BookSessionModal;
