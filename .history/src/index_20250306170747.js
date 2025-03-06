import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Import the minimal app instead of the regular one
import MinimalApp from './MinimalApp';

// Show when the script is executing
document.body.insertAdjacentHTML('afterbegin', 
  '<div style="background:yellow;padding:10px;text-align:center">JavaScript is running</div>'
);

// Clear any service workers to prevent caching issues
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

// Log environment information
console.log('Browser: ' + navigator.userAgent);
console.log('index.js executing');
console.log('Checking for root element:', document.getElementById('root'));

try {
  // Try rendering the minimal app
  ReactDOM.render(<MinimalApp />, document.getElementById('root'));
  console.log('ReactDOM.render called successfully');
  
  // Add a visible indicator that React has mounted
  document.body.insertAdjacentHTML('beforeend', 
    '<div style="background:lime;padding:10px;text-align:center">React has mounted successfully</div>'
  );
} catch (error) {
  console.error('Error rendering React app:', error);
  
  // Add a fallback rendering as a last resort
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 40px; border: 4px solid red; margin: 20px; background-color: #fff; font-size: 24px;">
        <h1>React Failed to Render</h1>
        <p>Error: ${error.message}</p>
        <p>See console for details.</p>
      </div>
    `;
  }
}
