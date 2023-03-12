import React from 'react';

const containerStyle = { display: 'flex', maxHeight: '100px', gap: '2rem', border: '1px #555555 solid' }
const imgContainerStyle = { maxWidth: '50px', maxHeight: '75px' };
const responsiveImageStyle = { objectFit: 'contain', maxWidth: '100%' };
const detailsStyle = { display: 'flex', flexDirection: 'column' }

const BookItem = ({ book, onItemSelected }) => {

    return (
        <div data-testid="book-item" style={containerStyle}>
            <div><input type="checkbox" onChange={onItemSelected} /></div>
            <div style={imgContainerStyle}>{
                <img style={responsiveImageStyle} alt={`${book.title} cover`} src={book?.formats && book?.formats['image/jpeg']} />
            }</div>
            <div style={detailsStyle}>
                <div>{book.title}</div>
                {book?.authors?.map((author) => (
                    <div key={`${author.name}-${book.title}`}>{author.name}</div>
                ))}

            </div>
        </div>
    )
}

export default BookItem;