import React from 'react';
import { useEffect } from 'react';
import BookItem from './BookItem';

const Booklist = ({books = [], scroll}) => {

    useEffect(() => {
        scroll();
    }, [scroll])

    const renderBookItems = () => {
        return books?.map((book) => (
            <BookItem key={book.id} book={book} />
        ))
    } 
    return (
        <div style={{height: '500px'}}>
            {renderBookItems()}
        </div>
    )
    }

export default Booklist;