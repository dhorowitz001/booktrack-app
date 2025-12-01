import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/books')
    .then(response => response.json())
    .then(data => setBooks(data))
    .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="App">
      <BookList books={books} />
    </div>
  );
}

export default App;
