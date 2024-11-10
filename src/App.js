import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Book({ book, onClick }) {
  return (
    <div
      className="book"
      onClick={() => onClick(book)}
      role="button"
      aria-label={`View details for ${book.volumeInfo.title}`}
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick(book)}
    >
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
    </div>
  );
}

function BookModal({ book, onClose }) {
  return (
    <div className="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
      <div className="modal-content">
        <button className="close" onClick={onClose} aria-label="Close">X</button>
        <h2 id="modal-title">{book.volumeInfo.title}</h2>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
        <p id="modal-description">{book.volumeInfo.description}</p>
        <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ')}</p>
        <p><strong>Published:</strong> {book.volumeInfo.publishedDate}</p>
        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
    </div>
  );
}

export default function App() {
  const [title, setTitle] = useState('');
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [notfound, setNotfound] = useState(false);
  const [searchedTitle, setSearchedTitle] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading indicator

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotfound(false);
    setLoading(true); // Set loading state to true

    try {
      const result = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
      if (result.data.items) {
        setBookList(result.data.items);
        setSearchedTitle(title);
      } else {
        setNotfound(true);
      }
    } catch (err) {
      console.error("An error occurred while fetching data:", err);
    } finally {
      setLoading(false); // Set loading state to false
    }
    setTitle('');
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📚 Book Finder 📚</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a book title here ..."
            value={title}
            onChange={handleChange}
            aria-label="Search for a book title"
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {loading && <p className="loading-message">Loading...</p>}

      {notfound && !loading && <p>No book found matching your search.</p>}

      {bookList.length > 0 && !notfound && searchedTitle && (
        <p className="search-result-message">
          Showing results for: <strong>{searchedTitle}</strong>
        </p>
      )}

      <div className="Books">
        {bookList.length > 0 ? (
          bookList.map((book) => (
            <Book book={book} key={book.id} onClick={handleBookClick} />
          ))
        ) : (
          !loading && <p>Search for a book to get started!</p>
        )}
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}

      <footer className="App-footer">
        Made with ❤️ by IshaqBasha
      </footer>
    </div>
  );
}
