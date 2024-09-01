// app.js
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/', routes);

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
