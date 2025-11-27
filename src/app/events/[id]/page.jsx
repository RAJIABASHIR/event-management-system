"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function EventDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${API_BASE}/events/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <p>Loading event...</p>
        </div>
      </section>
    );
  }

  if (!event) {
    return (
      <section className="section">
        <div className="container">
          <p>Event not found.</p>
          <button
            className="btn btn-outline"
            style={{ marginTop: "0.75rem" }}
            onClick={() => router.back()}
          >
            Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <button
          className="btn btn-outline"
          style={{ marginBottom: "1rem" }}
          onClick={() => router.back()}
        >
          ← Back
        </button>

        <div
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            marginBottom: "1.5rem",
            height: 260,
            background:
              "radial-gradient(circle at top left, #1e293b, #020617)",
          }}
        >
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                color: "#4b5563",
              }}
            >
            </div>
          )}
        </div>

        <h1
          style={{
            fontSize: "1.8rem",
            marginBottom: "0.5rem",
          }}
        >
          {event.title}
        </h1>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#9ca3af",
            marginBottom: "0.75rem",
          }}
        >
          {event.date || "TBA"} • Priority: {event.priority || "Normal"}
        </div>
        <div
          style={{
            marginBottom: "1rem",
            fontSize: "1rem",
            color: "#e5e7eb",
          }}
        >
          {event.description}
        </div>
        <div
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            color: "#a5b4fc",
          }}
        >
          {event.price ? `Ticket price: $${event.price}` : "Free to attend"}
        </div>
      </div>
    </section>
  );
}