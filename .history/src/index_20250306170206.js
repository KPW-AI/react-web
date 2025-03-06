import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log('index.js executing');
console.log('Checking for root element:', document.getElementById('root'));

try {
  ReactDOM.render(<App />, document.getElementById('root'));
  console.log('ReactDOM.render called successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
}
