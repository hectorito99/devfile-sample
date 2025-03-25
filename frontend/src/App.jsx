import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProfileSidebar from './components/Profile';

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.get("/api/mensaje") // Con OpenShift, esto se redirigirá al backend
      .then(response => setMensaje(response.data.mensaje))
      .catch(error => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <ProfileSidebar />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Mi portfolio Web!</h1>
        <p>{mensaje}</p>
      </div>
    </div>
  );
}

export default App;
