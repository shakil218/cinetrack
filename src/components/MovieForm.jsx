import { useRef, useState } from 'react';
import { validateMovie } from '../utils/validators';

const emptyForm = {
  title: '',
  genre: '',
  releaseYear: '',
  posterUrl: '',
};

export default function MovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const titleRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedData = {
      title: formData.title.trim(),
      genre: formData.genre.trim(),
      posterUrl: formData.posterUrl.trim(),
      releaseYear: formData.releaseYear,
    };

    const validationErrors = validateMovie(trimmedData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstError = Object.keys(validationErrors)[0];
      document.getElementById(firstError)?.focus();

      return;
    }

    onAddMovie({
      ...trimmedData,
      releaseYear: Number(trimmedData.releaseYear),
    });

    setFormData(emptyForm);
    setErrors({});

    titleRef.current?.focus();
  }

  const isFormValid =
    formData.title.trim() &&
    formData.genre.trim() &&
    formData.releaseYear &&
    formData.posterUrl.trim();

  return (
    <section
      className="panel form-panel"
      aria-labelledby="add-movie-title"
    >
      <h2 id="add-movie-title">Add New Movie</h2>

      <form
        className="movie-form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Title */}

        <div className="form-group">
          <label htmlFor="title">Movie Title</label>

          <input
            ref={titleRef}
            id="title"
            name="title"
            type="text"
            placeholder="Enter movie title"
            value={formData.title}
            onChange={handleChange}
            maxLength={80}
            autoComplete="off"
            required
          />

          {errors.title && (
            <small className="error">
              {errors.title}
            </small>
          )}
        </div>

        {/* Genre */}

        <div className="form-group">
          <label htmlFor="genre">Genre</label>

          <input
            id="genre"
            name="genre"
            type="text"
            placeholder="Action, Drama, Sci-Fi..."
            value={formData.genre}
            onChange={handleChange}
            maxLength={30}
            autoComplete="off"
            required
          />

          {errors.genre && (
            <small className="error">
              {errors.genre}
            </small>
          )}
        </div>

        {/* Release Year */}

        <div className="form-group">
          <label htmlFor="releaseYear">
            Release Year
          </label>

          <input
            id="releaseYear"
            name="releaseYear"
            type="number"
            placeholder="e.g. 2023"
            value={formData.releaseYear}
            onChange={handleChange}
            min="1888"
            max={new Date().getFullYear() + 2}
            required
          />

          {errors.releaseYear && (
            <small className="error">
              {errors.releaseYear}
            </small>
          )}
        </div>

        {/* Poster URL */}

        <div className="form-group full-width">
          <label htmlFor="posterUrl">
            Poster URL
          </label>

          <input
            id="posterUrl"
            name="posterUrl"
            type="url"
            placeholder="https://example.com/poster.jpg"
            value={formData.posterUrl}
            onChange={handleChange}
            maxLength={300}
            autoComplete="off"
            required
          />

          {errors.posterUrl && (
            <small className="error">
              {errors.posterUrl}
            </small>
          )}
        </div>

        <button
          className="primary-btn full-width"
          type="submit"
          disabled={!isFormValid}
        >
          Add Movie
        </button>
      </form>
    </section>
  );
}