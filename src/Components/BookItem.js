import React, { useRef } from 'react';

const containerStyle = { display: 'flex', height: '100px', gap: '2rem', border: '1px #555555 solid' }
const imgContainerStyle = { maxWidth: '50px', maxHeight: '75px' };
const responsiveImageStyle = { objectFit: 'contain', maxWidth: '100%' };
const detailsStyle = { display: 'flex', flexDirection: 'column' }

const BookItem = ({ book, onItemSelected }) => {

    const itemRef = useRef();

    const unCheck = () => {
        if (itemRef.current.checked) {
            itemRef.current.checked = false;
        }
    }

    return (
        <div data-testid="book-item" style={containerStyle}>
            <div><input ref={itemRef} type="checkbox" onChange={(e) => onItemSelected(e, unCheck)} /></div>
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