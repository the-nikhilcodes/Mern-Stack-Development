// Import the built-in 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status: OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! Welcome to Node.js\n');
});

// Define the port number
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}/`);
});
