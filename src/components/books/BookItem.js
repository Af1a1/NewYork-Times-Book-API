import '../../App.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookItem = ({
  book: {
    book_image,
    title,
    amazon_product_url,
    author,
    description,
    publisher,
  },
}) => {
  const [checked, setCheck] = useState(false);

  return (
    <div className='card text-center'>
      <img
        src={book_image}
        alt='bookItem'
        className='img'
        style={{ width: '60px' }}
      />
      <h3>{title}</h3>
      <div className='flex'>
        <span
          onClick={() => setCheck(!checked)}
          className='btn btn-dark btn-sm my-1'>
          More Details
        </span>
        <a href={amazon_product_url} className='btn btn-dark btn-sm my-1'>
          Buy Now
        </a>
      </div>
      {checked && (
        <div>
          <p>
            <b>Author: </b>
            {author}
          </p>
          <p>
            <b>Publisher: </b>
            {publisher}
          </p>
          <p>
            <b>Description: </b>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

BookItem.protoTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
