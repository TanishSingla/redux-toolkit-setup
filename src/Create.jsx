import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from './features/userDetailSlice';

const Create = () => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createUser(user));
        console.log(user);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Create User</h2>
            <form onSubmit={submitHandler} style={styles.form}>
                <label htmlFor="name" style={styles.label}>Name</label>
                <input type="text" name='name' onChange={getUserData} style={styles.input} />

                <label htmlFor="email" style={styles.label}>Email</label>
                <input type="text" name='email' onChange={getUserData} style={styles.input} />

                <label htmlFor="password" style={styles.label}>Password</label>
                <input type="password" name='password' onChange={getUserData} style={styles.input} />

                <button type="submit" style={styles.button}>
                    Create User
                </button>
            </form>
        </div>
    );
};

// Styles object
const styles = {
    container: {
        marginTop: '100px',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    title: {
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
        marginBottom: '15px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};


styles.button.onMouseOver = {
    backgroundColor: '#0056b3',
};

export default Create;
