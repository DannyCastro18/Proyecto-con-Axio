import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate de react-router-dom

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  useEffect(() => {
    // Verifica si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUsersClick = () => {
    if (!isAuthenticated) {
      setShowModal(true);
    } else {
      navigate("/Users"); // Redirige a la página de usuarios si está autenticado
    }
  };

  const handleLogout = () => {
    // Elimina el token del localStorage al cerrar sesión
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/LoginExample"); // Redirige al inicio después de cerrar sesión
  };

  return (
    <>
      <nav className="border-gray-200 dark:bg-zinc-800">
        <div className="flex flex-wrap justify-between items-center mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://i.pinimg.com/736x/eb/b1/6d/ebb16d6e081124070f8eb6f0c652450f.jpg"
              className="h-8"
              alt="Web-X"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Web-X
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleLogout}
                  className="relative px-4 py-2 font-semibold text-black bg-red-600 rounded-lg shadow-md group transition-transform duration-300 ease-in-out hover:translate-y-1 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform scale-0 bg-red-700 rounded-lg group-hover:scale-100"></span>
                  <span className="relative z-10 group-hover:text-blue-200">
                    Cerrar Sesión
                  </span>
                </button>

                <button
                  onClick={handleUsersClick} // Llama a la función para ir a la página de usuarios
                  className="relative px-4 py-2 font-semibold text-black bg-green-600 rounded-lg shadow-md group transition-transform duration-300 ease-in-out hover:translate-y-1 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out transform scale-0 bg-green-700 rounded-lg group-hover:scale-100"></span>
                  <span className="relative z-10 group-hover:text-blue-200">
                    Ver Usuarios
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>
      </nav>
      {isAuthenticated && (
        <div className="flex items-center justify-center mt-4 ">
          {/* Aquí iría el componente o el listado de usuarios */}
          <br />
          <h2 className="font-semibold text-xl text-white">Bienvenido, puedes ver los usuarios ahora.</h2>
        </div>
      )}
    </>
  );
}
