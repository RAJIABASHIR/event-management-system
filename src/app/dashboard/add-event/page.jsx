"use client";

import { useState } from "react";
import ProtectedRoute from "../../components/ui/ProtectedRoute";
import toast from "react-hot-toast";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

function AddEventForm() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    date: "",
    price: "",
    priority: "Normal",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  const setField = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.shortDescription || !form.description) {
      toast.error("Please fill in required fields");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to create event");
      toast.success("Event created");
      setForm({
        title: "",
        shortDescription: "",
        description: "",
        date: "",
        price: "",
        priority: "Normal",
        imageUrl: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Error creating event");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: "left" }}>
          <h1 className="section-title">Add event</h1>
          <p className="section-subtitle">
            Protected page – only available when logged in.
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Title *</label>
            <input
              className="form-input"
              value={form.title}
              onChange={(e) => setField("title", e.target.value)}
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label className="form-label">Short description *</label>
            <input
              className="form-input"
              value={form.shortDescription}
              onChange={(e) => setField("shortDescription", e.target.value)}
              placeholder="One-liner about your event"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Full description *</label>
            <textarea
              className="form-textarea"
              rows={4}
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
              placeholder="Describe the event in more detail..."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "0.75rem",
            }}
          >
            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-input"
                value={form.date}
                onChange={(e) => setField("date", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Price (USD)</label>
              <input
                type="number"
                min={0}
                step="0.01"
                className="form-input"
                value={form.price}
                onChange={(e) => setField("price", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Priority</label>
              <select
                className="form-select"
                value={form.priority}
                onChange={(e) => setField("priority", e.target.value)}
              >
                <option value="High">High</option>
                <option value="Normal">Normal</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Image URL </label>
            <input
              className="form-input"
              value={form.imageUrl}
              onChange={(e) => setField("imageUrl", e.target.value)}
              placeholder=""
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.75rem" }}
            disabled={loading}
          >
            {loading ? "Creating..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default function AddEventPage() {
  return (
    <ProtectedRoute>
      <AddEventForm />
    </ProtectedRoute>
  );
}
