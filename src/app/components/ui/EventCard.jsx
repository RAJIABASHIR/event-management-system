import Link from "next/link";

export default function EventCard({ event }) {
  const { _id, title, shortDescription, price, date, imageUrl, priority } =
    event;

  return (
    <div className="card">
      <div
        style={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          marginBottom: "0.8rem",
          background:
            "radial-gradient(circle at top left, #111827, #020617)",
          height: 140,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              color: "#4b5563",
            }}
          >
            
          </div>
        )}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          color: "#9ca3af",
          marginBottom: "0.25rem",
        }}
      >
        {date || "TBA"} • {priority || "Normal"}
      </div>
      <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.4rem" }}>{title}</h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "#9ca3af",
          marginBottom: "0.6rem",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {shortDescription}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.85rem",
        }}
      >
        <span style={{ color: "#a5b4fc", fontWeight: 600 }}>
          {price ? `$${price}` : "Free"}
        </span>
        <Link href={`/events/${_id}`}>
          <button className="btn btn-outline" style={{ fontSize: "0.8rem" }}>
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}