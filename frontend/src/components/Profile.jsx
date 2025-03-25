import React from 'react';
import './ProfileSidebar.css'; // Asegúrate de crear un archivo CSS para los estilos

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">
      <div className="profile-photo">
        <img src="https://via.placeholder.com/150" alt="Foto de perfil" />
      </div>
      <div className="profile-info">
        <h2>Héctor Martín Martín</h2>
        <p className="title">DevOps</p>
        <p className="contact-info">
          <strong>Teléfono:</strong> 994939439
        </p>
        <p className="contact-info">
          <strong>Email:</strong> ejemplo@correo.com
        </p>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ejemplo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/ejemplo" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://twitter.com/ejemplo" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default ProfileSidebar;
