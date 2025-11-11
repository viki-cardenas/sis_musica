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
    // CONTENEDOR PRINCIPAL: Fondo degradado de azul oscuro a púrpura (Estilo "Noche Musical")
    <div className="min-h-screen flex items-center justify-center p-4 
                    bg-gradient-to-br from-indigo-900 to-purple-900">
      
      {/* TARJETA DE CONTENIDO: Fondo negro semitransparente */}
      <div className="w-full max-w-md p-8 bg-gray-900/90 rounded-xl shadow-2xl 
                      border-2 border-purple-500/50"> {/* Borde púrpura sutil */}
        
        {/* TÍTULO: Texto blanco para un alto contraste */}
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
          Bienvenido a mi página 🎶
        </h1>
      <script>
</script>

        {/* CONTENIDO CONDICIONAL */}
        {token ? (
          // CONTENIDO SI HAY SESIÓN INICIADA
          <div className="text-center">
            {/* Mensaje de éxito en color de acento púrpura claro */}
            <p className="text-2xl font-semibold text-purple-400 mb-6">
              ¡Has iniciado sesión exitosamente! 
            </p>
            {/* BOTÓN DE LOGOUT: Púrpura vibrante */}
            <button
              onClick={handleLogout}
              className="w-full px-6 py-3 text-white font-bold 
                         bg-purple-600 rounded-full  
                         transition duration-300 ease-in-out hover:bg-purple-700 
                         shadow-lg shadow-purple-500/50" 
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
            
            {/* BOTÓN/LINK DE LOGIN: Púrpura vibrante */}
            <Link 
              to="/login" 
              className="inline-block w-full px-6 py-3 text-white font-bold 
                         bg-purple-600 rounded-full 
                         transition duration-300 ease-in-out hover:bg-purple-700 
                         shadow-lg shadow-purple-500/50 
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