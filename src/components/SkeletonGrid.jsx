export default function SkeletonGrid({ count = 6 }) {
  return (
    <section className="movie-grid">
      {Array.from({ length: count }).map((_, index) => (
        <article className="skeleton-card" key={index}>
          <div className="skeleton poster"></div>

          <div className="skeleton-content">
            <div className="skeleton line wide"></div>
            <div className="skeleton line short"></div>
            <div className="skeleton line wide"></div>

            <div className="skeleton-buttons">
              <div className="skeleton button"></div>
              <div className="skeleton button"></div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}