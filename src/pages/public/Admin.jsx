import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
    const navigate = useNavigate();
    const [bgImage, setBgImage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                // Obtener una imagen aleatoria de Unsplash
                const response = await axios.get('https://source.unsplash.com/random/1920x1080');
                setBgImage(response.request.responseURL);
            } catch (error) {
                console.error('Error fetching the background image', error);
            }
        };

        fetchImage();

        // Cambiar la imagen cada 10 segundos
        const interval = setInterval(fetchImage, 10000);

        // Limpiar el intervalo en el desmontaje del componente
        return () => clearInterval(interval);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica de autenticación
        if (username === 'admin' && password === 'password') {
            navigate('/registros'); // Redirige al dashboard si la autenticación es exitosa
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
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
                <img src="images/esjo.png" alt="imagen" className="w-40 h-40 mr-4 rounded-full transform transition-transform duration-500 hover:scale-110" style={{ marginRight: '20px' }} />
                <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-2xl max-w-md w-full transform transition-transform duration-500 hover:scale-110">
                    <h1 className="text-2xl font-bold text-center mb-4">Administrador</h1>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Cinta inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
}
