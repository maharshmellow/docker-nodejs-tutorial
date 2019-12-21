const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Docker Test\n');
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});