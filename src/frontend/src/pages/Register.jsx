import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  // Para redirigir al usuario después del registro
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar el usuario');
      }

      console.log('Usuario registrado:', data);
      navigate('/login-success');

    } catch (err) {
      setError(err.message);
    }
  };

   return (
    // CONTENEDOR PRINCIPAL: Fondo negro profundo, centrado
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      
      {/* TARJETA DE CONTENIDO: Fondo gris oscuro, con borde y sombra verde */}
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-2xl 
                      border border-green-700/50">
        
        {/* TÍTULO: Texto verde neón */}
        <h1 className="text-3xl font-extrabold text-green-400 text-center">
          Crear una Cuenta 🎶
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            {/* Etiquetas de campo: Texto gris claro */}
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              // Campos de entrada: Fondo negro, texto blanco, foco verde neón
              className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md shadow-sm 
                         bg-gray-900 text-white placeholder-gray-500 
                         focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // Campos de entrada: Fondo negro, texto blanco, foco verde neón
              className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md shadow-sm 
                         bg-gray-900 text-white placeholder-gray-500 
                         focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // Campos de entrada: Fondo negro, texto blanco, foco verde neón
              className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md shadow-sm 
                         bg-gray-900 text-white placeholder-gray-500 
                         focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Mensaje de error: Texto rojo */}
          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              // Botón principal: Verde neón, texto negro/oscuro, hover más oscuro
              className="w-full px-4 py-3 font-extrabold text-gray-900 
                         bg-green-400 rounded-full transition duration-300 
                         hover:bg-green-500 shadow-md shadow-green-500/50
                         transform hover:scale-[1.01] focus:ring-green-500"
            >
              Registrarse
            </button>
          </div>
        </form>

        {/* Link de Iniciar Sesión */}
        <p className="text-sm text-center text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <Link 
            to="/login" 
            className="font-extrabold text-green-400 hover:text-green-500"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;