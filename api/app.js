const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si es necesario

app.use(express.json()); // Agregar middleware para analizar el cuerpo JSON de las solicitudes POST

// Ruta para sumar dos valores (método POST)
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;
  const resultado = parseFloat(num1) + parseFloat(num2);
  res.json({ resultado });
});

// Ruta para mostrar el carnet (método GET)
app.get('/carnet', (req, res) => {
    res.send('carnet: 201612511');
  });

  // Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
