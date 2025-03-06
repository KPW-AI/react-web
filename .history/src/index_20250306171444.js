// Import React essentials
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Insert a banner to confirm JavaScript is running
document.body.insertAdjacentHTML('afterbegin', 
  '<div style="background:yellow;padding:10px;text-align:center">JavaScript is running</div>'
);

// Simple React component - defined as a variable to avoid potential syntax issues
const HelloWorld = React.createElement(
  'div', 
  {
    style: {
      padding: '40px',
      margin: '40px',
      border: '2px solid blue',
      backgroundColor: '#f0f8ff',
      fontSize: '24px',
      color: 'black',
      fontWeight: 'bold',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    }
  },
  React.createElement('h1', null, 'Hello World from React'),
  React.createElement('p', null, 'This content was rendered with React')
);

// Try to mount React - fallback to direct DOM manipulation if it fails
try {
  console.log('Attempting to mount React component');
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    // Render using plain ReactDOM.render for maximum compatibility
    ReactDOM.render(HelloWorld, rootElement);
    console.log('React component mounted successfully');
  } else {
    throw new Error('Root element not found');
  }
} catch (reactError) {
  console.error('React rendering failed:', reactError);
  
  // Fall back to direct DOM manipulation
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 40px; margin: 40px; border: 2px solid red; 
           background-color: #f8f8f8; font-size: 24px; color: black; 
           font-weight: bold; box-shadow: 0 0 10px rgba(0,0,0,0.5)">
        <h1>React Failed - Fallback Content</h1>
        <p>React rendering failed: ${reactError.message}</p>
        <p>Using direct DOM manipulation instead.</p>
      </div>
    `;
  }
}

// Confirm execution completed
document.body.insertAdjacentHTML('beforeend', 
  '<div style="background:lime;padding:10px;text-align:center">JavaScript execution completed</div>'
);
