import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Insert a banner to confirm JavaScript is running
document.body.insertAdjacentHTML('afterbegin', 
  '<div style="background:yellow;padding:10px;text-align:center">JavaScript is running</div>'
);

// Render a simple element
const simpleElement = (
  <div style={{
    padding: '40px',
    margin: '40px',
    border: '2px solid red',
    backgroundColor: '#f8f8f8',
    fontSize: '24px',
    color: 'black',
    fontWeight: 'bold',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  }}>
    <h1>Hello World</h1>
    <p>This is a simple React element</p>
  </div>
);

// Mount React element directly
const rootElement = document.getElementById('root');
ReactDOM.render(simpleElement, rootElement);

// Confirm React has mounted
document.body.insertAdjacentHTML('beforeend', 
  '<div style="background:lime;padding:10px;text-align:center">React has mounted successfully</div>'
);
