import React from 'react';

// Header component for the store
function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Store Name</h1>
            <button style={styles.button}>Profile</button>
        </header>
    );
}

export default Header;

// Local styles for the Header component
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 20px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f1f0eb',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#4B382A',
        fontFamily: '"Playfair Display", serif', 
    },
    button: {
        padding: '8px 12px',
        fontSize: '20px',
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
    }
};

