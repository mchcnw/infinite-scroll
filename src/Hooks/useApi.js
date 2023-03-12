import { useState , useCallback} from "react"

export const useBooksList = () => {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);
    const [count, setCount] = useState(0);

    const listBooks = useCallback(async (goPrev, goNext) => {
        const endpoint = process.env.REACT_APP_BOOK_ENDPOINT; // add logic for next/previous else default
        setLoading(true);
        try {
            const response = await fetch(endpoint);
            // handle not 200
            if(!response.ok) {
                setError(`Response failed ${response.status}`)
            } else {
                const data = await response.json();
                setBooks(data?.results);
                setCount(data.count);
                setPrev(data?.previous);
                setNext(data?.next);
            }

        } catch(e) {
            setError(e);
        } finally {
            setLoading(false)
        }
    } , [])

    return {
        books, loading, error, count, listBooks, 
    }
}