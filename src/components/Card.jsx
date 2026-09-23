export default function Card({ event }) {
  return (
    <article className={`card theme-${event.theme}`}>
      <div className="card-art" aria-hidden="true">
        <span className="art-kicker">{event.kicker}</span>
        <span className="card-symbol">{event.symbol}</span>
        <span className="art-number">
          757 / {String(event.id).padStart(2, "0")}
        </span>
        <span className="example-badge">EXAMPLE EVENT</span>
      </div>
      <div className="card-content">
        <p className="category">{event.category}</p>
        <h3>{event.title}</h3>
        <p className="description">{event.description}</p>
        <p className="location">
          <span aria-hidden="true">⌖</span> {event.location}{" "}
          <span className="location-divider">/</span> Concept location
        </p>
        <a
          className="resource-link"
          href={event.url}
          target="_blank"
          rel="noreferrer"
        >
          {event.linkLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
