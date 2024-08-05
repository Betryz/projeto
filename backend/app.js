const express = require('express');
const app = express();
const port = 3000;

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Rota para a página "About"
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
