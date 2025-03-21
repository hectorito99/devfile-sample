const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API para React
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: "¡Hola desde el backend en Node.js en OpenShift!" });
});

// Servir el frontend desde la carpeta build
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Todas las rutas que no sean API deben devolver el index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
