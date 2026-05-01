// pages/BookSessionPage.jsx
import React from "react";
import BookSessionForm from "../../components/BookSessionForm/BookSessionForm";


const BookSessionPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: '1.5rem' }}>Book A Free Session</h1>      
      <BookSessionForm />
    </div>
  );
};

export default BookSessionPage;
