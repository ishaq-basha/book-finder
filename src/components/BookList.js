import React from 'react';

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <p className="text-lg mt-4">No books found. Try another search.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {books.map((book, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 bg-white"
        >
          <h3 className="text-xl font-semibold">{book.title || 'No Title'}</h3>
          <p className="text-gray-700 mt-2">
            {book.author_name && book.author_name.length > 0
              ? `By: ${book.author_name.join(', ')}`
              : 'Author unknown'}
          </p>
          <p className="text-gray-500 mt-1">
            Published: {book.first_publish_year || 'N/A'}
          </p>
          {/* Safe access example to prevent undefined issues */}
          <p className="mt-1">
            {book.subject && book.subject.includes('fiction') ? 'Fiction' : 'Non-Fiction'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
