import React from 'react';
import image from './seatgeek-logo-vector.svg'


const App = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'roboto'
        }}>
            <img src={image} alt="Logo" width="100px" height="100px" />
            <h1 style={{
                color: 'Green',
                margin: 0
            }}>Wah Gwan, Soon Come</h1>
            <p>What's up, Coming Soon</p>
        </div>
    )
}

export default App;
