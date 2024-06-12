import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Ingreso() {
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState('');


  useEffect(() => {
    const fetchImage = async () => {
        try {
            // Obtener una imagen aleatoria de Lorem Picsum
            const response = await axios.get('https://source.unsplash.com/random/1920x1080', {
                responseType: 'blob'
            });
            setBgImage(URL.createObjectURL(response.data));
        } catch (error) {
            console.error('Error fetching the background image', error);
        }
    };

    fetchImage();

    // Cambiar la imagen cada 10 segundos
    const interval = setInterval(fetchImage, 5000);

    // Limpiar el intervalo en el desmontaje del componente
    return () => clearInterval(interval);
  }, []);

  const admin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    navigate('/admin'); // Redirige al componente Asistencia
  };

  const alumno = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    navigate('/asistencia'); // Redirige al componente Asistencia
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out', // Transición suave de la imagen de fondo
      }}
    >
      {/* Cinta superior */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent"></div>

       {/* Rectángulo negro en el lateral izquierdo */}
       <div className="absolute  left-0 h-2/3 bg-black w-10 transform transition-transform duration-500 hover:scale-110"></div>

{/* Rectángulo negro en el lateral derecho */}
<div className="absolute  right-0 h-2/3 bg-black w-10 transform transition-transform duration-500 hover:scale-110"></div>


      {/* Contenido del formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <img src="images/tec.png" alt="imagen" className="w-40 h-40 mr-4 rounded-full transform transition-transform duration-500 hover:scale-110" style={{ marginRight: '20px' }} />
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-2xl max-w-md w-full transform transition-transform duration-500 hover:scale-110">
          <h1 className="text-2xl font-bold text-center mb-6">Bienvenido</h1>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-6"
            onClick={admin}
          >
            Administrador 
          </button>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={alumno}
          >
            Alumno
          </button>
        </div>
      </div>

      {/* Cinta inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
