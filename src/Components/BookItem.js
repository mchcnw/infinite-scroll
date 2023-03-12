import React from 'react';

const BookItem = ({book, onItemSelected}) => {

    return (
        <div data-testid="book-item" style={{ display: 'flex', maxHeight: '100px', gap: '2rem', border: '1px #555555 solid'}}>
            <div><input type="checkbox" onChange={onItemSelected} /></div>
            <div style={{maxWidth: '50px', maxHeight: '75px'}}>{
                <img style={{objectFit: 'contain' , maxWidth: '100%'}} alt={`${book.title} cover`} src={book?.formats && book?.formats['image/jpeg']} />
            }</div>
            <div style={{ display: 'flex', flexDirection:'column'}}>
                <div>{book.title}</div>
                { book?.authors?.map((author) => (
                     <div key={`${author.name}-${book.title}`}>{author.name}</div>
                ))}
         
            </div>
        </div>
    )
}

export default BookItem;