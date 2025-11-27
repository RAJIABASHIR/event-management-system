"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "../../components/ui/ProtectedRoute";
import Link from "next/link";
import toast from "react-hot-toast";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

function ManageEventsInner() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/events`);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
      toast.error("Error loading events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this event?")) return;
    try {
      const res = await fetch(`${API_BASE}/events/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Event deleted");
      setEvents((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Error deleting event");
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: "left" }}>
          <h1 className="section-title">Manage events</h1>
          <p className="section-subtitle">
            Protected page – view and delete existing events.
          </p>
        </div>

        {loading ? (
          <p>Loading events...</p>
        ) : events.length === 0 ? (
          <p style={{ color: "#9ca3af" }}>No events yet. Add your first one.</p>
        ) : (
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr key={e._id}>
                    <td>{e.title}</td>
                    <td>{e.date || "TBA"}</td>
                    <td>{e.price ? `$${e.price}` : "Free"}</td>
                    <td>{e.priority || "Normal"}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <Link href={`/events/${e._id}`}>
                          <button
                            className="btn btn-outline"
                            style={{
                              fontSize: "0.75rem",
                              padding: "0.3rem 0.7rem",
                            }}
                          >
                            View
                          </button>
                        </Link>
                        <button
                          className="btn btn-outline"
                          style={{
                            fontSize: "0.75rem",
                            padding: "0.3rem 0.7rem",
                            borderColor: "#f97373",
                            color: "#fecaca",
                          }}
                          onClick={() => handleDelete(e._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default function ManageEventsPage() {
  return (
    <ProtectedRoute>
      <ManageEventsInner />
    </ProtectedRoute>
  );
}
