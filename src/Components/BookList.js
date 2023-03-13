import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import BookItem from './BookItem';
import Header from './Header'
import { useBooksList } from '../Hooks/useBookList';
import { useState } from 'react';

const LoadingStyle = { width: '5rem', padding: '1rem', position: 'absolute', bottom: '20%', left: '47%', zIndex: 99, backgroundColor: '#000000', color: '#ffffff' }
const scroller = { height: '500px', overflow: 'auto' };

const Booklist = () => {
    const { books, loading, error, next, retrievedCount, listBooks } = useBooksList();
    const [countSelected, setCountSelected] = useState(0)
    const [deselectList, setDeselectList] = useState([]);
    const bookListRef = useRef();
    const handleScroll = () => {
        const isAtBottom = Math.abs(bookListRef?.current.scrollHeight - bookListRef?.current.clientHeight - bookListRef?.current.scrollTop) < 1;
        if (isAtBottom) {
            listBooks(next);
        }
    }

    useEffect(() => {
        listBooks();
    }, [listBooks])


    const handleItemChecked = useCallback((e, fn) => {
        setDeselectList((prev) => [...prev, fn])
        setCountSelected((prev) => e.target.checked ? prev + 1 : prev - 1)
    }, [setCountSelected, setDeselectList]);

    const resetAllSelected = useCallback(() => {
        deselectList.forEach((fn) => {
            fn();
        })
        setCountSelected(0)
    }, [setCountSelected, deselectList])

    const renderBookItems = useMemo(() => {
        return books?.map((book) => (
            <BookItem onItemSelected={handleItemChecked} key={`${book.id}-${book.title}`} book={book} />
        ))
    }, [books, handleItemChecked])

    const renderError = useMemo(() => {
        return error && (
            <div>Sorry there has been a problem. Please try again.</div>
        )
    }, [error]);

    const renderLoading = useMemo(() => {
        return loading && (
            <div style={LoadingStyle}>...Loading</div>
        )
    }, [loading]);

    return (
        <>
            <Header currentCount={retrievedCount} selectedCount={countSelected} reset={resetAllSelected} />
            {renderError ||
                <>
                    <div data-testid="book-list-scroll" ref={bookListRef} style={scroller} onScroll={handleScroll}>
                        {renderBookItems}
                    </div>
                    {renderLoading}
                </>
            }
        </>
    )

}

export default Booklist;