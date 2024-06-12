import React, { useState, useEffect } from 'react';


export default function Asistencia() {
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');

  const [alumnos, setAlumnos] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos')) || [];
    setAlumnos(alumnosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  const handleRegistro = (e) => {
    e.preventDefault();

    if (nombre === ''  || matricula === '' ) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const nuevoAlumno = { nombre, matricula,};
    setAlumnos([...alumnos, nuevoAlumno]);

    setNombre('');
 

    setMatricula('');

    // Mostrar el modal
    setShowModal(true);
  };

  const handleMatriculaChange = (e) => {
    const { value } = e.target;
    // Solo permitir caracteres numéricos
    if (/^\d*$/.test(value)) {
        setMatricula(value);
    }
  };



  return (
    <div className=" min-h-screen bg-gray-100 p-20">
      {/* Rectángulo negro en el lateral izquierdo */}
      <div className="absolute  left-0 h-3/4 bg-black w-10 transform transition-transform duration-500 hover:scale-110"></div>

{/* Rectángulo negro en el lateral derecho */}
<div className="absolute  right-0 h-3/4 bg-black w-10 transform transition-transform duration-500 hover:scale-110"></div>
      <h1 className="text-2xl font-bold text-center mb-6">
        
        Asistencia de Alumnos
        
        </h1>
      <form onSubmit={handleRegistro} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="matricula" className="block text-sm font-medium text-gray-700">Matrícula</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={matricula}
            onChange={handleMatriculaChange}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-500 hover:scale-110"
          >
            Registrar Asistencia
          </button>
        </div>
        <div className="text-mdmBlue flex justify-between items-center underline text-[10px] md:text-xs font-semibold ">
            <a href="/register">Registrarse</a>
            <a href="/#">Salir</a>
           
          </div>
      </form>
     
      <div className="flex justify-between items-center p-6">
    <img 
        src="images/tec.png" 
        alt="imagen" 
        className="w-40 h-40 rounded-full transform transition-transform duration-500 hover:scale-110"
    />
    <div className="flex-1 flex justify-center">
        {/* Aquí puedes colocar tu contenido central */}
    </div>
    <img 
        src="images/esjo.png" 
        alt="imagen" 
        className="w-40 h-40 rounded-full transform transition-transform duration-500 hover:scale-110"
    />
</div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      {showModal && <AsistenciaExitosa closeModal={() => setShowModal(false)} />}
    </div>
  );
}

function AsistenciaExitosa({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Asistencia Registrada</h2>
        <p>El alumno ha sido registrado exitosamente.</p>
        <button
          onClick={closeModal}
          className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-500 hover:scale-110"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}