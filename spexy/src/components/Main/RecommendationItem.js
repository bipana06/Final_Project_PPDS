import React, { useState } from 'react';

function Modal({ item, onClose }) {
    if (!item) return null;

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        modal: {
            background: '#fff',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '600px',
            width: '90%',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            position: 'relative',
        },
        title: {
            flex: 1,
            textAlign: 'center',
            margin: 0,
        },
        closeButton: {
            background: '#4B382A',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'absolute',
            right: 0,
        },
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <div style={modalStyles.header}>
                    <h2 style={modalStyles.title}>{item["Glass Name"]}</h2>
                    <button style={modalStyles.closeButton} onClick={onClose}>
                    ✕
                    </button>
                </div>
                
                <img src={item.image_url} alt={item["Glass Name"]} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                {/* <a href={item.Link} target="_blank" rel="noopener noreferrer" style={{ color: '#1e90ff' }}>
                    View More Details 🔗
                </a> */}
                <button onClick={() => window.open(item.Link, '_blank')} 
                style={{background: '#4B382A',color: '#fff',border: 'none',padding: '10px 20px',borderRadius: '5px',cursor: 'pointer',marginTop: '15px',fontSize: '16px'
                }}>
                View More Details 🔗
                </button>
            </div>
        </div>
    );
}

// Component to display a single recommendation item
function RecommendationItem({ item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal visibility

    return (
        <div>
            <div
                style={{
                    ...styles.card,
                    ...(isHovered ? styles.hoverEffect : {}),
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(true)} // Open Modal on click
            >
                <img src={item.image_url} alt={item["Glass Name"]} style={styles.image} />
                <h3 style={styles.name}>{item["Glass Name"]}</h3>
                <p style={styles.price}>{item.Price}</p>
                <div style={styles.colors}>
                    <span>Available Colors: </span>
                    {item.Colors.map((color, index) => (
                        <span key={index} style={styles.color}>
                            {color}
                            {index < item.Colors.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                </div>
                <a href={item.Link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    View Glass 🔗
                </a>
                <button
                    style={{
                        ...styles.button,
                        ...(isButtonHovered ? styles.buttonHover : {}),
                    }}
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                >
                    Try
                </button>
            </div>
<<<<<<< Updated upstream
            <a href={item.Link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                View the glass
            </a>
            <button style={styles.button}>Try</button>
=======
            {isModalOpen && <Modal item={item} onClose={() => setIsModalOpen(false)} />}
>>>>>>> Stashed changes
        </div>
    );
}

// Local styles for the RecommendationItem component
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        fontFamily: '"Playfair Display", serif',
        cursor: 'pointer',
    },
    hoverEffect: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '16px',
    },
    name: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#4B382A',
        margin: '8px 0',
    },
    price: {
        color: '#ff5722',
        fontSize: '1em',
        fontWeight: 'bold',
        margin: '8px 0',
    },
    colors: {
        fontSize: '0.9em',
        color: '#555',
        margin: '8px 0',
    },
    color: {
        display: 'inline',
    },
    link: {
        display: 'inline-block',
        marginTop: '12px',
        fontSize: '0.9em',
        color: '#1e90ff',
        textDecoration: 'none',
        marginRight: '12px',
    },
    button: {
        marginTop: '12px',
        padding: '5px 20px',
        fontSize: '1em',
        color: '#4B382A',
        backgroundColor: 'transparent',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#4B382A',
        color: 'white',
    },
};

export default RecommendationItem;
