import React, { useState, useEffect } from 'react';
import './components.css';
import BookList from './components/BookList';
import Header from './components/Header';

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
      <Header />
      <main>
        <BookList books={books} />
      </main>
    </div>
  );
}

export default App;
