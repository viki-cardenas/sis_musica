import React from 'react';

/**
 * Componente que renderiza la tarjeta de una sola Playlist.
 * * @param {object} playlist - El objeto de la playlist recibido de la API de Spotify.
 * @param {function} onClick - Función para manejar el clic en la tarjeta (navegación).
 */
const PlaylistItem = ({ playlist, onClick }) => {
    // Aseguramos que la playlist y su imagen existen
    if (!playlist) {
        return null;
    }

    // Encuentra la URL de la imagen. La API de Spotify devuelve un array de imágenes.
    const imageUrl = playlist.images && playlist.images.length > 0 
                     ? playlist.images[0].url 
                     : 'ruta/a/imagen_por_defecto.png'; // Usar una imagen de marcador de posición si no hay imagen

    const ownerName = playlist.owner ? playlist.owner.display_name : 'Spotify';

    // Estilos básicos para la tarjeta
    const cardStyle = {
        backgroundColor: '#181818',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textAlign: 'left'
    };
    
    // Estilos al pasar el ratón (hover)
    const hoverStyle = {
        backgroundColor: '#282828'
    };

    return (
        <div 
            style={cardStyle} 
            onClick={() => onClick(playlist.id)} // Llama a la función de clic, pasando el ID de la playlist
            // Aquí puedes añadir manejo de estado hover para el estilo hoverStyle
        >
            <img 
                src={imageUrl} 
                alt={playlist.name} 
                style={imageStyle}
            />
            <h3 style={titleStyle}>{playlist.name}</h3>
            <p style={subtitleStyle}>Por: {ownerName}</p>
            <p style={detailsStyle}>{playlist.tracks.total} canciones</p>
        </div>
    );
};

// --- Estilos CSS en línea ---
const imageStyle = {
    width: '100%',
    height: 'auto',
    aspectRatio: '1 / 1', // Asegura que la imagen sea cuadrada
    borderRadius: '4px',
    objectFit: 'cover',
    marginBottom: '10px'
};

const titleStyle = {
    fontSize: '1.1em',
    color: 'white',
    margin: '0 0 4px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

const subtitleStyle = {
    fontSize: '0.9em',
    color: '#B3B3B3',
    margin: '0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
};

const detailsStyle = {
    fontSize: '0.8em',
    color: '#888',
    margin: '4px 0 0 0'
};

export default PlaylistItem;
