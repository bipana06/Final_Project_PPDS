// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// // component to display the login form
// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     // function to handle loginå
//     const handleLogin = () => {
//         console.log('Logging in:', username, password);
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.card}>
//                 <h1 style={styles.header}>Spexy</h1>
//                 <div style={styles.inputContainer}>
//                     <InputField
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <InputField
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div style={styles.buttonContainer}>
//                     <Link to="/reset" style={{ textDecoration: 'none' }}>
//                         <button style={styles.buttonSecondary}>Forgot Password</button>
//                     </Link>
//                     <button style={styles.button} onClick={handleLogin}>Submit</button>
//                 </div>
//                 <div style={styles.links}>
//                     <Link to="/signup" style={styles.link}>New user? Sign up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // component for input field
// function InputField({ type, placeholder, value, onChange }) {
//     return (
//         <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             style={styles.input}
//         />
//     );
// }

// export default LoginForm;

<<<<<<< Updated upstream

// // local styles for the login form
=======
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         console.log('Logging in:', username, password);
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.card}>
//                 <h1 style={styles.header}>Spexy</h1>
//                 <div style={styles.inputContainer}>
//                     <InputField
//                         type="text"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <InputField
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <div style={styles.buttonContainer}>
//                     <Link to="/reset" style={{ textDecoration: 'none' }}>
//                         <button style={styles.buttonSecondary}>Forgot Password</button>
//                     </Link>
//                     <button style={styles.button} onClick={handleLogin}>Submit</button>
//                 </div>
//                 <div style={styles.links}>
//                     <Link to="/signup" style={styles.link}>New user? Sign up</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function InputField({ type, placeholder, value, onChange }) {
//     return (
//         <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             style={styles.input}
//         />
//     );
// }

// export default LoginForm;

>>>>>>> Stashed changes
// const styles = {
//     container: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         backgroundColor: '#f8f9fa', // Light background color
//     },
//     card: {
//         backgroundColor: '#d3d3d3', // Light gray background for card
//         padding: '40px',
//         borderRadius: '16px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         width: '350px',
//         textAlign: 'center',
//     },
//     header: {
//         fontSize: '36px',
//         fontWeight: 'bold',
//         marginBottom: '30px',
//         color: '#2c3e50',
//         fontFamily: 'Georgia, serif', // Match the font style in the design
//     },
//     inputContainer: {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px',
//     },
//     input: {
//         padding: '10px',
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//         width: '100%',
//         boxSizing: 'border-box',
//         fontSize: '16px',
//         outline: 'none',
//     },
//     buttonContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginTop: '20px',
//     },
//     button: {
//         padding: '10px 20px',
//         backgroundColor: '#2c3e50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontFamily: 'Arial, sans-serif',
//     },
//     buttonSecondary: {
//         padding: '10px 20px',
//         backgroundColor: '#2c3e50',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         fontFamily: 'Arial, sans-serif',
//     },
//     links: {
//         marginTop: '20px',
//         display: 'flex',
//         justifyContent: 'center',
//         width: '100%',
//         fontSize: '0.9em',
//         color: '#007bff',
//     },
//     link: {
//         textDecoration: 'none',
//         color: '#007bff',
//     }
// };

<<<<<<< Updated upstream
// src/components/Login/LoginForm.js
=======
>>>>>>> Stashed changes
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< Updated upstream
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setError('');
            // Set authentication flag in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/admin'); // Redirect to Admin page
        } else {
            setError('Invalid username or password');
        }
=======
    const [hoveredButton, setHoveredButton] = useState(null);
    // const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in:', username, password);
        // Implement login logic here
        // navigate('/dashboard'); // Redirect after login
>>>>>>> Stashed changes
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
<<<<<<< Updated upstream
                <h1 style={styles.header}>Spexy</h1>
                <div style={styles.inputContainer}>
                    <InputField
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={styles.error}>{error}</p>}
=======
                <h1 style={styles.header}>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
>>>>>>> Stashed changes
                <div style={styles.buttonContainer}>
                    <Link to="/reset" style={{ textDecoration: 'none' }}>
                        <button
                            style={{
                                ...styles.button,
                                ...(hoveredButton === 'forgot' && styles.buttonHover),
                            }}
                            onMouseEnter={() => setHoveredButton('forgot')}
                            onMouseLeave={() => setHoveredButton(null)}
                        >
                            Forgot Password?
                        </button>
                    </Link>
                    <button
                        style={{
                            ...styles.button,
                            ...(hoveredButton === 'login' && styles.buttonHover),
                        }}
                        onMouseEnter={() => setHoveredButton('login')}
                        onMouseLeave={() => setHoveredButton(null)}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
                <Link to="/signup" style={styles.registerLink}>
                    New User? Sign up here
                </Link>
            </div>
        </div>
    );
}

<<<<<<< Updated upstream
// component for input field
function InputField({ type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={styles.input}
        />
    );
}

// Local styles for the LoginForm component
=======
export default LoginForm;

>>>>>>> Stashed changes
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
<<<<<<< Updated upstream
        backgroundColor: '#f8f9fa',
    },
    card: {
        backgroundColor: '#d3d3d3',
        padding: '40px',
=======
        width: '100vw',
        backgroundColor: '#d3d3d3',
    },
    card: {
        backgroundColor: '#f1f0eb',
        padding: '60px',
>>>>>>> Stashed changes
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center',
    },
    header: {
        fontSize: '60px',
        fontWeight: 'bold',
        marginBottom: '30px',
<<<<<<< Updated upstream
        color: '#2c3e50',
        fontFamily: 'Georgia, serif',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
=======
        color: '#4B382A',
        fontFamily: '"Playfair Display", serif',
>>>>>>> Stashed changes
    },
    input: {
        padding: '15px',
        border: 'none',
        borderRadius: '18px',
        width: '100%',
        boxSizing: 'border-box',
        fontSize: '18px',
        backgroundColor: '#bfc4c9',
        outline: 'none',
        marginBottom: '20px',
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
    },
    button: {
        padding: '15px 40px',
        backgroundColor: 'transparent',
        color: 'black',
        border: '2px solid black',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        fontFamily: '"Playfair Display", serif',
    },
    buttonHover: {
        backgroundColor: '#4B382A',
        color: 'white',
    },
    registerLink: {
        marginTop: '20px',
        display: 'block',
        fontSize: '14px',
        textDecoration: 'underline',
        fontFamily: '"Playfair Display", serif',
    },
<<<<<<< Updated upstream
    link: {
        textDecoration: 'none',
        color: '#007bff',
    },
    error: {
        color: 'red',
        marginBottom: '15px',
    },
};

export default LoginForm;

=======
};

>>>>>>> Stashed changes
