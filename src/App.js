import React from 'react';
import Header from './Components/Header'
import Booklist from './Components/BookList';

import './App.css';

function App() {

  return (
    <div style={{ display: 'flex',alignItems: 'center', justifyContent: 'center' , width: '10ovw', height: '100vh'}}>
      <div style={{ width: '500px', border: '#555555 2px solid' }}>
        <Header />
        <Booklist />
      </div>
    </div>
  );
}

export default App;
