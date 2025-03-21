import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("/api/mensaje") // Con OpenShift, esto se redirigirá al backend
      .then(response => setMensaje(response.data.mensaje))
      .catch(error => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Mi Aplicación en React + Node.js</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
