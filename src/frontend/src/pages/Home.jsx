import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  },
    []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

   return (
    // CONTENEDOR PRINCIPAL: Fondo degradado de verde oscuro a negro (Estilo "Noche Estrellada Verde-Negra")
    <div className="min-h-screen flex items-center justify-center p-4 
                    bg-gradient-to-br from-gray-900 to-green-900">
      
      {/* TARJETA DE CONTENIDO: Fondo negro semitransparente */}
      <div className="w-full max-w-md p-8 bg-gray-900/90 rounded-xl shadow-2xl 
                      border-2 border-green-500/50"> {/* Borde verde sutil */}
        
        {/* TÍTULO: Texto verde claro para un alto contraste */}
        <h1 className="text-3xl font-extrabold text-green-400 mb-6 text-center">
          Bienvenido a mi página 🎶
        </h1>
        
        {/* CONTENIDO CONDICIONAL */}
        {token ? (
          // CONTENIDO SI HAY SESIÓN INICIADA
          <div className="text-center">
            {/* Mensaje de éxito en color de acento verde brillante */}
            <p className="text-2xl font-semibold text-green-300 mb-6">
              ¡Has iniciado sesión exitosamente! 
            </p>
            {/* BOTÓN DE LOGOUT: Verde vibrante */}
            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 text-white font-bold 
                         bg-green-600 rounded-full 
                         transition duration-300 ease-in-out hover:bg-green-700 
                         shadow-lg shadow-green-500/50" 
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          // CONTENIDO SI NO HAY SESIÓN INICIADA
          <div className="text-center">
            {/* Texto de advertencia en color claro */}
            <p className="text-xl text-gray-300 mb-6 font-medium">
              Parece que no has iniciado sesión
            </p>
            
            {/* BOTÓN/LINK DE LOGIN: Verde vibrante */}
            <Link 
              to="/login" 
              className="inline-block w-full px-6 py-3 text-white font-bold 
                         bg-green-600 rounded-full 
                         transition duration-300 ease-in-out hover:bg-green-700 
                         shadow-lg shadow-green-500/50 
                         transform hover:scale-105"
            >
              Ir a la página de Login
            </Link>
          </div>
        )}
        
      </div> 
    </div>
  );
}

export default Home;