// src/frontend/src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer text-center py-4 bg-light mt-auto">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item mx-4"><a href="#">Política de Privacidad</a></li>
          <li className="list-inline-item mx-4"><a href="#">Términos de Servicio</a></li>
          <li className="list-inline-item mx-4"><a href="#">Contacto</a></li>
        </ul>
        <div className="social-icons mb-3">
          {/* Aquí puedes agregar iconos de redes sociales */}
        </div>
        <p className="mb-0">© 2025 <span className="fw-bold">HealthVision.</span> Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;




