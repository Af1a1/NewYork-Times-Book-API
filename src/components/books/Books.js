import React from 'react';
import BookItem from './BookItem';
import Spinner from '../layouts/Spinner';

const Books = ({ books, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={bookStyle}>
        {books.map((book) => (
          <BookItem key={book.isbns.isbn10} book={book} />
        ))}
      </div>
    );
  }
};

const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Books;
