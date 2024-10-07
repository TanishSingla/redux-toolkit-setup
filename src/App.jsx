import React from 'react';
import Create from './Create';
import AllData from './AllData';

const App = () => {
  return (
    <div style={styles.appContainer}>
      <AllData />
      <Create />
    </div>
  );
};

// Styles object
const styles = {
  appContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #6e7ff3, #b3c0ff)', // Nice gradient background
    padding: '20px',
    boxSizing: 'border-box',
  },
};

export default App;
