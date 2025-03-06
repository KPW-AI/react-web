import React from 'react';

function App() {
  const value = 'World';
  
  const styles = {
    container: {
      padding: '40px',
      margin: '40px',
      border: '2px solid red',
      backgroundColor: '#f8f8f8',
      fontSize: '24px',
      color: 'black',
      fontWeight: 'bold',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    }
  };
  
  console.log('App component rendering');
  
  return (
    <div style={styles.container}>
      <h1>Hello {value}</h1>
      <p>If you can see this, React is working correctly!</p>
    </div>
  );
}

export default App;
