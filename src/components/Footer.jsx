export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>🎬 CineTrack</h3>
          <p>Your personal movie watchlist dashboard.</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/shakil218"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/md-shakil-islam-sagor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} CineTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}