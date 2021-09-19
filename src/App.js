import React from 'react';
import logo from "./img.png";


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
            <img src={logo} alt="Logo" width="100px" height="100px" />
            <h1 style={{
                color: 'Green',
                margin: 0
            }}>Wah Gwan, Soon Come</h1>
            <p>What's up, Coming Soon</p>
        </div>
    )
}

export default App;
