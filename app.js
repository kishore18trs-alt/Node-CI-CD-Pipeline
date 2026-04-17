const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from Node!'));// This is a simple Express server that responds with "Hello from Node!" when the root URL is accessed.

app.listen(3001, () => console.log('Server running on port 3001'));