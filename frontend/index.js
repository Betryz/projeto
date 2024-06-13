const express = require('express');
const Joi = require('joi');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});



const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor: OK. Porta: ${PORT}.`);
});