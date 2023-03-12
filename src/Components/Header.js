import React from 'react'

const Header = ({currentCount, selectedCount, reset}) => {
    return (
        <div>
   <h1 style={{borderBottom: '1px solid #555555'}}>Books</h1>
   <div style={{display: 'flex', gap: '3rem', justifyContent: 'space-between', padding: '0 0.5rem'}}>
    <div style={{display: 'flex', gap: '0.5rem',  fontWeight:'600'}}><span>{currentCount} books</span><span>{`{${selectedCount} selected}`}</span></div>
     <div style={{alignItems: 'flex-end'}}><button style={{}} onClick={reset}>Clear selection</button></div>
   </div>
        </div>
     
    )
}

export default Header;
