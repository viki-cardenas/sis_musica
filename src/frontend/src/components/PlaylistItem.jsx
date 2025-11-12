// Archivo: components/PlaylistItem.jsx
import React from 'react';
const PlaylistItem = ({ playlist }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl hover:bg-gray-700 transition duration-200 cursor-pointer">
            <img 
                src={playlist.image} 
                alt={playlist.title} 
                className="w-full h-auto rounded-md mb-3 border border-green-500/30"
            />
            <h4 className="text-xl font-bold text-white truncate">{playlist.title}</h4>
            <p className="text-sm text-green-400">{playlist.count} canciones</p>
        </div>
    );
};

export default PlaylistItem;
