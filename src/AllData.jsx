import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, readUser } from './features/userDetailSlice';

const AllData = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app); // Make sure to match the correct slice

    // const handleDelete = () => {
    //     dispatch(deleteUser());
    // }
    useEffect(() => {
        dispatch(readUser());
    }, [dispatch]);

    if (loading) {
        return (
            <div style={styles.loading}>
                <h2>Loading Data....</h2>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>All Data</h1>
            <div style={styles.cardContainer}>
                {users && users.map((ele) => (
                    <div
                        key={ele.id}
                        style={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0px)';
                        }}
                    >
                        <h3>Name: <label>{ele.name}</label></h3>
                        <p>Email: <label>{ele.email}</label></p>
                        {/* <button onClick={handleDelete}>Delete</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Styles object
const styles = {
    container: {
        padding: '20px',
        backgroundColor: 'transparent', // Set background to transparent
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333', // Optional: Change title color for better visibility
    },
    loading: {
        textAlign: 'center',
        marginTop: '20px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '300px',
        textAlign: 'center',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
    },
};

export default AllData;
