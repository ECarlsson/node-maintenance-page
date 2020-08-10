const express = require('express');
const path = require('path');

const port = process.env.PORT || 4040;
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  res.set('Retry-After', 3600);
  res.status(503);
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', () => {
  console.log(`Express listening on port ${port}...`);
});