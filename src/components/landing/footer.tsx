import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 text-gray-400">
      <div className="container text-center text-sm">
        <p>&copy; {currentYear} Resina Master. Todos los derechos reservados.</p>
        <p className="mt-2">Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Una vez que sales de Facebook, la responsabilidad no es de ellos, sino de nuestro sitio.</p>
      </div>
    </footer>
  );
};
