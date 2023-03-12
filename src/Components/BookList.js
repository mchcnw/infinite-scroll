import React from 'react';
import BookItem from './BookItem';

const Booklist = () => {
    const renderBookItems = () => {
        return [...Array(32)].map(() => (
            <BookItem />
        ))
    }
    return (
        <div style={{height: '500px'}}>
            {renderBookItems()}
        </div>
    )
    }

export default Booklist;