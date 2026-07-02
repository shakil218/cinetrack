export default function Navbar({ totalMovies, watchedMovies }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">🎬</span>
        <div className="navbar-logo-content">
          <h2>CineTrack</h2>
          <p>Movie Watchlist Dashboard</p>
        </div>
      </div>

      <div className="navbar-stats">
        <div className="stat-card">
          <span>Total Movies</span>
          <strong>{totalMovies}</strong>
        </div>

        <div className="stat-card watched">
          <span>Watched</span>
          <strong>{watchedMovies}</strong>
        </div>
      </div>
    </nav>
  );
}