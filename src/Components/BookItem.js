import React from 'react';

const BookItem = () => {
    return (
        <div style={{ display: 'flex', maxHeight: '75px'}}>
            <div><input type="checkbox" /></div>
            <div style={{maxWidth: '50px'}}>item.cover</div>
            <div style={{ display: 'flex', flexDirection:'column'}}>
                <div>item.title</div>
                <div>item.authors</div>
            </div>
        </div>
    )
}

export default BookItem;