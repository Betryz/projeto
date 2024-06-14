const express = require('express');
const Joi = require('joi');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src',  'login.html'));
});


const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Servidor: OK. Porta: ${PORT}.`);
});