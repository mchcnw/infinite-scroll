import React,{ useEffect, useMemo, useRef } from 'react';
import BookItem from './BookItem';
import { useBooksList } from '../Hooks/useBookList';

const Booklist = () => {
    const {books, loading, error, next,listBooks} = useBooksList();
    const bookListRef = useRef();
    const handleScroll = () => {
        const isAtBottom = bookListRef?.current?.scrollHeight - bookListRef?.current?.scrollTop === bookListRef?.current?.clientHeight;
        if(isAtBottom) {
            listBooks(next);
        } 
    }

    useEffect(() => {
        listBooks();
    }, [listBooks])

    const renderBookItems = useMemo(() => {
        return books?.map((book) => (
            <BookItem key={book.id} book={book} />
        ))
    }, [books])

    const renderError = useMemo(() => {
        return error && (
            <div>Sorry there has been a problem. Please try again.</div>
          )
    }, [error]);

    const renderLoading = useMemo(() => {
        return loading && (
            <div>...Loading</div>
            )
    }, [loading]);

    return (
       renderError ||
       <>
        <div ref={bookListRef} style={{height: '500px', overflow: 'scroll'}} onScroll={handleScroll}>
            {renderBookItems}
        </div>
        {renderLoading}
        </>
    )
    }

export default Booklist;