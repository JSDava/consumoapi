import React from 'react';
import { AlumnosRegister } from '../../utils/FullData';

export default function Registros() {
    const alumnos = AlumnosRegister();
    return (
        <div className="">
            {/* Fondo Gradiente Izquierdo */}
            <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-black/50 to-transparent"></div>

            {/* Fondo Gradiente Derecho */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-black/50 to-transparent"></div>

            {/* Contenedor de la Tabla */}
            <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg overflow-hidden shadow-md relative z-10">
                {/* Título de la Tabla */}
                <h2 className="text-xl font-bold text-center mt-8">Lista de Alumnos Registrados</h2>

                {/* Tabla */}
                <table className="w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left">Matrícula</th>
                            <th className="py-3 px-6 text-left">Apellido Paterno</th>
                            <th className="py-3 px-6 text-left">Apellido Materno</th>
                            <th className="py-3 px-6 text-left">Nombre(s)</th>
                            <th className="py-3 px-6 text-left">Carrera</th>
                            <th className="py-3 px-6 text-left">Fecha de Registro</th>
                            <th className="py-3 px-6 text-left">Hora de Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Ejemplo de Datos */}
                        {alumnos.map(alumno => (
                            <tr key={alumno.id}>
                                <td className="py-4 px-6 border-b">{alumno.id}</td>
                                <td className="py-4 px-6 border-b">{alumno.Ap}</td>
                                <td className="py-4 px-6 border-b">{alumno.Am}</td>
                                <td className="py-4 px-6 border-b">{alumno.Name}</td>
                                <td className="py-4 px-6 border-b">{alumno.Carrier}</td>
                                <td className="py-4 px-6 border-b">{alumno.FR}</td>
                                <td className="py-4 px-6 border-b">{alumno.FH}</td>
                            </tr>
                        ))}
                        {/* Agrega más filas según tus datos */}
                    </tbody>
                </table>
                <div className="flex justify-end py-4 px-10 ">
            
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                            >
                                <a href="/Admin">Regresar</a>
                            </button>
                        </div>
            </div>
            
        </div>
    );
}



