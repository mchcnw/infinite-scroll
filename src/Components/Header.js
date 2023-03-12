import React from 'react'

const borderBottomStyle = { borderBottom: '1px solid #555555' };
const itemContainerStyle = { display: 'flex', gap: '3rem', justifyContent: 'space-between', padding: '0 0.5rem' };
const countsStyle = { display: 'flex', gap: '0.5rem', fontWeight: '600' }

const Header = ({ currentCount, selectedCount, reset }) => {
    return (
        <div>
            <h1 style={borderBottomStyle}>Books</h1>
            <div style={itemContainerStyle}>
                <div style={countsStyle}><span>{currentCount} books</span><span>{`(${selectedCount} selected)`}</span></div>
                <div><button onClick={reset}>Clear selection</button></div>
            </div>
        </div>

    )
}

export default Header;
