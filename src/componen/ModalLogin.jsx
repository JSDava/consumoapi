import React, { useState, useEffect } from "react";
import { dataDocuments } from "../utils/FullData";
import axios from "axios";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [matricula, setMatricula] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [carrera, setCarrera] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Obtener una imagen aleatoria de Lorem Picsum
        const response = await axios.get(
          "https://source.unsplash.com/random/1920x1080",
          {
            responseType: "blob",
          }
        );
        setBgImage(URL.createObjectURL(response.data));
      } catch (error) {
        console.error("Error fetching the background image", error);
      }
    };
    fetchImage();

    // Cambiar la imagen cada 10 segundos
    const interval = setInterval(fetchImage, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const alumnosGuardados = JSON.parse(localStorage.getItem("alumnos")) || [];
    setAlumnos(alumnosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }, [alumnos]);

  const handleRegistro = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      carrera === "" ||
      matricula === "" ||
      apellidoM === "" ||
      apellidoP === ""
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const nuevoAlumno = { nombre, carrera, matricula, apellidoP, apellidoM };
    setAlumnos([...alumnos, nuevoAlumno]);

    setNombre("");
    setCarrera("");
    setApellidoM("");
    setApellidoP("");
    setMatricula("");

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

  const data = dataDocuments();

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-black/80 to-transparent"></div>

      <div className="w-2/3">
        <img
          src={bgImage}
          alt="background"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-1/3 p-6">
        <div className="flex items-center justify-center p-6">
          <img
            src="images/tec.png"
            alt="imagen"
            className="w-40 h-40 rounded-full transform transition-transform duration-500 hover:scale-110"
            style={{ marginRight: "20px" }}
          />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Nuevo de Alumno</h1>
        <form
          onSubmit={handleRegistro}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="matricula"
              className="block text-sm font-medium text-gray-700"
            >
              Matrícula
            </label>
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
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre(s)
            </label>
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
          <div className="mb-4">
            <label
              htmlFor="apellidoP"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido Paterno
            </label>
            <input
              type="text"
              id="apellidoP"
              name="apellidoP"
              value={apellidoP}
              onChange={(e) => setApellidoP(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellidoM"
              className="block text-sm font-medium text-gray-700"
            >
              Apellido Materno
            </label>
            <input
              type="text"
              id="apellidoM"
              name="apellidoM"
              value={apellidoM}
              onChange={(e) => setApellidoM(e.target.value)}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <p className="text-mdmGray font-semibold text-sm">Carrera</p>
            <select
              name="list"
              className="w-full border border-mdmGray rounded-md h-10 text-mdmGray text-xs px-3"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
            >
              <option disabled value="">
                Elija su Carrera
              </option>
              {data.map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-500 hover:scale-110"
            >
              Registrarse
            </button>
          </div>
          <div className="text-mdmBlue flex justify-end items-center underline text-[10px] md:text-xs font-semibold ">
            <a href="/#">Salir</a>
          </div>
        </form>
      </div>

      {showModal && (
        <AsistenciaExitosa closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
}

function AsistenciaExitosa({ closeModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Registro exitoso</h2>
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
