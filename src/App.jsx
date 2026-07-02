import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieForm from "./components/MovieForm";
import { initialMovies } from "./data/initialMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

const STORAGE_KEY = "cinetrack_movies_v1";

export default function App() {
  const [movies, setMovies] = useLocalStorage(
    STORAGE_KEY,
    initialMovies
  );

  function handleAddMovie(movieData) {
    const newMovie = {
      id: crypto.randomUUID(),
      ...movieData,
      watched: false,
      createdAt: new Date().toISOString(),
    };

    setMovies((prev) => [newMovie, ...prev]);
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">CineTrack</p>

          <h1>Movie Watchlist & Review Dashboard</h1>

          <p>
            Track movies, filter watched status, search
            titles, and keep everything saved in your
            browser.
          </p>
        </div>
      </header>

      <MovieForm onAddMovie={handleAddMovie} />

      <section className="panel">
        
            <h1>total movies: {movies.length}</h1>
          <section className="movie-grid" aria-label="Movie list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </section>
      </section>

    </main>
  );
}