import React from 'react';

const BookItem = ({book}) => {
    return (
        <div style={{ display: 'flex', maxHeight: '75px'}}>
            <div><input type="checkbox" /></div>
            <div style={{maxWidth: '50px'}}>item.cover</div>
            <div style={{ display: 'flex', flexDirection:'column'}}>
                <div>{book.title}</div>
                { book?.authors?.map((author) => (
                     <div>{author.name}</div>
                ))}
         
            </div>
        </div>
    )
}

export default BookItem;