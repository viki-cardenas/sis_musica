// Archivo: pages/Dashboard.jsx

import Navbar from './Navbar'; 

const Dashboard = () => {
    
    // --- Datos Simulados de la Sesión ---
    const user = { 
        name: "Usuario Spotify", 
        avatar: "https://via.placeholder.com/150/000000?text=U", 
        id: "user123" 
    };
    
    // --- Datos Simulados de Contenido ---
    const playlists = [
        { id: 1, title: "Rock Clásico", count: 45, image: "https://via.placeholder.com/100/10b981?text=Rock" },
        { id: 2, title: "Chill Vibes", count: 22, image: "https://via.placeholder.com/100/059669?text=Chill" },
        { id: 3, title: "Synthwave 80s", count: 60, image: "https://via.placeholder.com/100/14532d?text=Synth" },
    ];
    
    const trendingTracks = [
        { id: 't1', title: 'Midnight City', artist: 'M83' },
        { id: 't2', title: 'The Less I Know The Better', artist: 'Tame Impala' },
        { id: 't3', title: 'Blinding Lights', artist: 'The Weeknd' },
    ];

    return (
        // CONTENEDOR PRINCIPAL: Fondo negro, estilo visual de la aplicación.
        <div className="bg-gray-900 min-h-screen text-white">
            
            {/* 1. BARRA DE NAVEGACIÓN (Incluye links a las 5 vistas) */}
            <Navbar user={user} />
            
            {/* CONTENIDO PRINCIPAL */}
            <div className="p-4 md:p-8 max-w-7xl mx-auto">
                
                {/* Saludo y Título */}
                <h2 className="text-4xl font-extrabold mb-8 text-green-400 border-b border-green-700 pb-2">
                    ¡Bienvenido, {user.name.split(' ')[0]}! 🎧
                </h2>
                
                {/* --- MÓDULO 1: PISTAS EN TENDENCIA (Destacados) --- */}
                <section className="mb-10">
                    <h3 className="text-2xl font-bold mb-4 text-gray-200">
                        🔥 Pistas en Tendencia
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {trendingTracks.map(track => (
                            <div key={track.id} className="bg-gray-800 p-4 rounded-lg flex items-center shadow-md hover:bg-gray-700 transition duration-200 cursor-pointer border border-transparent hover:border-green-600">
                                <div className="text-green-400 text-3xl mr-4">🎵</div>
                                <div>
                                    <p className="text-lg font-semibold text-white truncate">{track.title}</p>
                                    <p className="text-sm text-gray-400">{track.artist}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* --- MÓDULO 2: TUS PLAYLISTS (Muestra tus listas) --- */}
                <section className="mb-10">
                    <h3 className="text-2xl font-bold mb-4 text-gray-200">
                        Mis Playlists Recientes
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {playlists.map(list => (
                            <PlaylistItem key={list.id} playlist={list} />
                            // Se asume que PlaylistItem está en components/
                        ))}
                    </div>
                </section>

                {/* --- MÓDULO 3: ACCESO RÁPIDO A VISTAS CLAVE (Ej. Búsqueda) --- */}
                <section className="mb-10 text-center p-8 bg-gray-800/70 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-400">
                        ¿Qué quieres escuchar ahora?
                    </h3>
                    {/* El Link apunta a la Vista de Búsqueda */}
                    <button
                        onClick={() => window.location.href = '/search'} 
                        className="px-8 py-3 bg-green-500 text-gray-900 font-extrabold rounded-full 
                                   hover:bg-green-600 transition duration-300 shadow-xl shadow-green-500/50 
                                   transform hover:scale-105"
                    >
                        Buscar Música 🔎
                    </button>
                </section>
                
            </div>
            
        </div>
    );
};

export default Dashboard;