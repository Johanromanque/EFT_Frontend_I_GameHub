const express = require('express');
const cors = require('cors');
const productos = require('./data/productos.json');

const app = express();
app.use(cors());

app.get('/api/productos', (req, res) => {
  res.status(200).json(productos);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
