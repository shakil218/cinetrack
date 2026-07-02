export default function Toolbar({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange,
  totalMovies,
}) {
  return (
    <section className="panel toolbar">
      <div className="toolbar-header">
        <div>
          <h2>Movie Collection</h2>
          <p>{totalMovies} movie(s) found</p>
        </div>
      </div>

      <div className="toolbar-controls">
        <div className="form-group">
          <label htmlFor="search" className="sr-only">
            Search Movies
          </label>

          <input
            id="search"
            type="text"
            placeholder="🔍 Search by title..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="filter" className="sr-only">
            Filter Movies
          </label>

          <select
            id="filter"
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">All Movies</option>
            <option value="watched">Watched</option>
            <option value="unwatched">Unwatched</option>
          </select>
        </div>
      </div>
    </section>
  );
}