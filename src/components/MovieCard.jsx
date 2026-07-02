const fallbackPoster = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80';

export default function MovieCard({ movie, onToggleWatched, onDeleteMovie }) {
  return (
    <article className="movie-card">
      <div className="poster-wrap">
        <img
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
          loading="lazy"
          onError={(event) => { event.currentTarget.src = fallbackPoster; }}
        />
        <span className={movie.watched ? 'status watched' : 'status unwatched'}>
          {movie.watched ? 'Watched' : 'Unwatched'}
        </span>
      </div>

      <div className="movie-content">
        <p className="genre">{movie.genre}</p>
        <h3>{movie.title}</h3>
        <p className="year">Released: {movie.releaseYear}</p>

        <div className="card-actions">
          <button className="secondary-btn" onClick={() => onToggleWatched(movie.id)}>
            {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
          </button>
          <button className="danger-btn" onClick={() => onDeleteMovie(movie.id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
