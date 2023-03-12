import React from 'react';
import Header from './Components/Header'
import Booklist from './Components/BookList';

import './App.css';
import { useBooksList } from './Hooks/useApi';


function App() {

  const {books, loading, error, listBooks} = useBooksList()
  
  return (
    <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' , width: '10ovw', height: '100vh'}}>
      <div style={{ width: '500px', border: '#555555 2px solid' }}>
        <Header />
        {error && (
          <div>Sorry there has been a problem. Please try again.</div>
        )}
        <Booklist books={books} scroll={listBooks} />
        {loading && (
          <div>...Loading</div>
          )}
      </div>
    </div>
  );
}

export default App;
