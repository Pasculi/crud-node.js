const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send(`Bienvenido a la raíz`)
})

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`)
});