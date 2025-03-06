// Import only the CSS file
import './index.css';

// Insert a banner to confirm JavaScript is running
document.body.insertAdjacentHTML('afterbegin', 
  '<div style="background:yellow;padding:10px;text-align:center">JavaScript is running</div>'
);

// Using direct DOM manipulation
try {
  console.log('Attempting to modify root element directly');
  const rootElement = document.getElementById('root');
  if (rootElement) {
    // Directly modify the DOM as a test
    rootElement.innerHTML = `
      <div style="padding: 40px; margin: 40px; border: 2px solid red; 
           background-color: #f8f8f8; font-size: 24px; color: black; 
           font-weight: bold; box-shadow: 0 0 10px rgba(0,0,0,0.5)">
        <h1>Hello World</h1>
        <p>This content was added using direct DOM manipulation (not React)</p>
      </div>
    `;
    console.log('DOM manipulation successful');
  } else {
    console.error('Could not find root element');
  }
} catch (error) {
  console.error('Error manipulating DOM:', error);
}

// Confirm JavaScript execution completed
document.body.insertAdjacentHTML('beforeend', 
  '<div style="background:lime;padding:10px;text-align:center">JavaScript execution completed</div>'
);
