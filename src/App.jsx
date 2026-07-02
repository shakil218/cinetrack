import "./App.css";
import { useEffect, useMemo, useState } from "react";

import MovieForm from "./components/MovieForm";
import Toolbar from "./components/Toolbar";
import MovieCard from "./components/MovieCard";
import SkeletonGrid from "./components/SkeletonGrid";
import EmptyState from "./components/EmptyState";

import { initialMovies } from "./data/initialMovies";
import { useLocalStorage } from "./hooks/useLocalStorage";

const STORAGE_KEY = "cinetrack_movies_v1";

export default function App() {
  const [movies, setMovies] = useLocalStorage(STORAGE_KEY, initialMovies);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fake loading to show skeleton UI
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  function handleAddMovie(movieData) {
    const newMovie = {
      id: crypto.randomUUID(),
      ...movieData,
      watched: false,
      createdAt: new Date().toISOString(),
    };

    setMovies((prev) => [newMovie, ...prev]);
  }

  function handleToggleWatched(id) {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie,
      ),
    );
  }

  function handleDeleteMovie(id) {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  }

  const filteredMovies = useMemo(() => {
    return movies
      .filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .filter((movie) => {
        if (filter === "watched") return movie.watched;

        if (filter === "unwatched") return !movie.watched;

        return true;
      });
  }, [movies, searchTerm, filter]);

  return (
     <main className="app-shell">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">🎬 CineTrack</p>

          <h1>Movie Watchlist Dashboard</h1>

          <p>
            Track your favorite movies, search by title,
            filter by watched status, and keep everything
            saved in your browser.
          </p>
        </div>
      </header>

      {/* Add Movie */}
      <MovieForm onAddMovie={handleAddMovie} />

      {/* Toolbar */}
      <Toolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filter={filter}
        onFilterChange={setFilter}
        totalMovies={filteredMovies.length}
      />

      {/* Movies */}
      {loading ? (
        <SkeletonGrid />
      ) : filteredMovies.length === 0 ? (
        <EmptyState />
      ) : (
        <section className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleWatched={handleToggleWatched}
              onDeleteMovie={handleDeleteMovie}
            />
          ))}
        </section>
      )}
    </main>
  );
}
