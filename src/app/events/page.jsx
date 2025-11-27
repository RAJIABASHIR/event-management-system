"use client";

import { useEffect, useState } from "react";
import EventCard from "../components/ui/EventCard";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(`${API_BASE}/events`);
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const filtered = events.filter((e) => {
    const matchesQuery =
      !query ||
      e.title.toLowerCase().includes(query.toLowerCase()) ||
      e.shortDescription.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      category === "all" ||
      (category === "paid" && e.price && Number(e.price) > 0) ||
      (category === "free" && (!e.price || Number(e.price) === 0));
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: "left" }}>
          <h1 className="section-title">Browse events</h1>
          <p className="section-subtitle">
            Search and filter through public events.
          </p>
        </div>

        
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <input
            className="form-input"
            style={{ flex: "1 1 200px" }}
            placeholder="Search by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="form-select"
            style={{ width: 160 }}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All types</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </div>

        {loading ? (
          <p>Loading events...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>
            No events found. Try adjusting your search or add a new event.
          </p>
        ) : (
          <div className="grid-3">
            {filtered.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
