const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Endpoint to get PS5 controller models
app.get('/api/controllers', (req, res) => {
  const controllers = require('./controllers.json');
  res.json(controllers);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
