// pages/Dashboard.jsx
import React from 'react';

// Importaciones corregidas para tu estructura: src/components/search
import Sidebar from "../components/search/Sidebar.jsx"; 
import NavUser from "../components/search/NavUser.jsx";
import Player from "../components/search/Player.jsx";
import AlbumCard from '../components/search/AlbumCard.jsx';
import ArtistCard from '../components/search/ArtistCard.jsx';

// Datos Mock para el ejemplo
const mockAlbums = [
    { id: 'al1', title: 'Greatest Hits', artist: 'Artista Famoso', imageUrl: 'url/hits.jpg', type: 'album' },
    { id: 'al2', title: 'Focus Playlist', artist: 'Varios Artistas', imageUrl: 'url/focus.jpg', type: 'playlist' },
];
const mockArtists = [
    { id: 'ar1', name: 'The Beatles', imageUrl: 'url/beatles.jpg' },
    { id: 'ar2', name: 'Dua Lipa', imageUrl: 'url/dualipa.jpg' },
];

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard-page">
                <h1>Buenos días</h1>
                
                {/* Sección 1: Álbumes y Playlists Destacadas */}
                <section className="dashboard-section">
                    <h2>Saltar de nuevo</h2>
                    <div className="content-grid album-card-grid">
                        {mockAlbums.map(item => (
                            <AlbumCard key={item.id} {...item} />
                        ))}
                    </div>
                </section>
                
                {/* Sección 2: Artistas Recomendados */}
                <section className="dashboard-section">
                    <h2>Artistas para ti</h2>
                    <div className="content-grid artist-card-grid">
                        {mockArtists.map(artist => (
                            <ArtistCard key={artist.id} {...artist} />
                        ))}
                    </div>
                </section>
                
            </div>
        </Layout>
    );
};

// Componente de Layout (Definición local para simplicidad)
const Layout = ({ children }) => (
  <div className="app-layout">
    <Sidebar />
    <div className="main-content">
      <NavUser />
      <main className="page-content">
        {children}
      </main>
    </div>
    <Player />
  </div>
);

export default Dashboard;