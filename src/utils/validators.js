export function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function validateMovie(formData) {
  const errors = {};
  const currentYear = new Date().getFullYear();

  if (!formData.title.trim()) errors.title = 'Movie title is required.';
  if (!formData.genre.trim()) errors.genre = 'Genre is required.';

  const year = Number(formData.releaseYear);
  if (!formData.releaseYear) {
    errors.releaseYear = 'Release year is required.';
  } else if (!Number.isInteger(year) || year < 1888 || year > currentYear + 2) {
    errors.releaseYear = 'Enter a valid release year.';
  }

  if (!formData.posterUrl.trim()) {
    errors.posterUrl = 'Poster URL is required.';
  } else if (!isValidUrl(formData.posterUrl)) {
    errors.posterUrl = 'Enter a valid http/https poster URL.';
  }

  return errors;
}