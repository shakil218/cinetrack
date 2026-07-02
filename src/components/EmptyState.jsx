export default function EmptyState() {
  return (
    <section className="empty-state">
      <div className="empty-icon">🎬</div>

      <h2>No Movies Found</h2>

      <p>
        We couldn't find any movies matching your search or filter.
      </p>

      <p className="empty-tip">
        Try changing the search term, selecting a different filter, or add a
        new movie to your collection.
      </p>
    </section>
  );
}