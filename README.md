# CineTrack - Movie Watchlist & Review Interface

CineTrack is a responsive React.js frontend application for managing a movie watchlist. Users can add movies, search by title, filter by watched/unwatched status, toggle watched state, delete movies, and keep their list saved in browser localStorage.

## Live Demo
Vercel: https://cinetrack-ivory.vercel.app/

## GitHub Repository
https://github.com/shakil218/cinetrack

## Features
- Responsive movie dashboard grid
- Add movie form with client-side validation
- Search movies by title
- Filter by All, Watched, and Unwatched
- Toggle watched/unwatched status
- Delete movies
- localStorage persistence
- Simulated loading skeleton on initial load
- Clean component-based structure

## Tech Stack
- React.js
- Vite
- CSS
- Browser localStorage

## How to Run Locally
```bash
git clone https://github.com/your-username/cinetrack.git
cd cinetrack
npm install
npm run dev
```

Open the local URL shown in your terminal.

## Build Command
```bash
npm run build
```

## Folder Structure
```bash
src/
├── components/
├── data/
├── hooks/
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Assumptions
- This is a frontend-only assignment, so there is no backend API.
- Movie data is stored in localStorage for persistence.
- Poster images are loaded from public image URLs.

## Improvements With More Time
- Add edit movie functionality
- Add movie rating/review notes
- Add sort by release year or created date
- Add unit tests for validation utilities and components
