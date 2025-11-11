import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaSpotify,
  FaGoogle,
  FaEnvelope,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

function Login() {
  const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [showEmailForm, setShowEmailForm] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }

      localStorage.setItem("authToken", data.data.token);
      navigate("/login-success");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    // CONTENEDOR PRINCIPAL: Fondo negro total
    <div className="flex flex-col items-center justify-start min-h-screen bg-black pt-8">
      {/* CONTENEDOR CENTRAL */}
      <div className="w-full max-w-xs text-center">
        {/* LOGO DE SPOTIFY */}
        <div className="flex justify-center mb-5">
          <FaSpotify className="w-16 h-16 text-green-500" />
        </div>

        {/* TÍTULO DE INICIO DE SESIÓN */}
        <h1 className="text-2xl font-bold text-white mb-5">
          Inicia sesión para escuchar contenido
        </h1>

        {/* --- BOTONES DE LOGIN/PLATAFORMAS --- */}
        <div className="space-y-4">
          <div className="mt-8 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-sm text-center text-red-400 mb-4">{error}</p>
              )}

              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 flex items-center justify-center font-bold text-black 
                           bg-green-500 border border-green-500 rounded-full transition duration-300 hover:bg-green-400 shadow-md"
              >
                <FaEnvelope className="mr-3 w-5 h-5" />
                Continuar con tu email
              </button>
            </form>
          </div>

          {/* 2. BOTÓN - CONTINUAR CON TELÉFONO (Gris oscuro con borde) */}
          <button
            onClick={() =>
              alert("Función no implementada: Continuar con Teléfono")
            }
            className="w-full px-4 py-3 flex items-center justify-center font-medium text-white 
                           bg-transparent border border-gray-600 rounded-full transition duration-300 hover:bg-gray-900"
          >
            <FaPhoneAlt className="mr-3 w-5 h-5" />
            Continuar con teléfono
          </button>

          {/* 3. BOTÓN - CONTINUAR CON GOOGLE (Gris oscuro con borde) */}
          <a
            href={GOOGLE_AUTH_URL}
            className="w-full px-4 py-3 flex items-center justify-center font-medium text-white 
                           bg-transparent border border-gray-600 rounded-full transition duration-300 hover:bg-gray-900"
          >
            <FaGoogle className="mr-3 w-5 h-5 text-red-500" />
            Continuar con Google
          </a>

          {/* 4. BOTÓN - CONTINUAR CON FACEBOOK (Gris oscuro con borde) */}
          <button
            onClick={() => handleSocialLogin("Facebook")}
            className="w-full px-4 py-3 flex items-center justify-center font-medium text-white 
                           bg-transparent border border-gray-600 rounded-full transition duration-300 hover:bg-gray-900"
          >
            <FaFacebookF className="mr-3 w-5 h-5 text-blue-500" />
            Continuar con Facebook
          </button>
        </div>

        {/* --- ENLACES DE PIE DE PÁGINA --- */}
        <div className="pt-7">
          <p className="text-gray-400 text-sm">¿Ya tienes cuenta?</p>
          <Link
            to="/register"
            className="text-white font-semibold hover:text-green-500 transition duration-300 text-sm"
          >
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
}

// Función auxiliar para botones sociales
const handleSocialLogin = (platform) => {
  alert(`Redirigiendo a ${platform} para iniciar sesión...`);
};

export default Login;
