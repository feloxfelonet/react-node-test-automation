
const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/items', (req, res) => res.json(todos));
app.post('/items', (req, res) => {
  const item = req.body;
  todos.push(item);
  res.status(201).json(item);
});

app.listen(3001, () => console.log('Server running on port 3001'));
