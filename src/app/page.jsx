import Link from "next/link";

export default function HomePage() {
  return (
    <>
      
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-main">
            <div className="badge">
              <span>✨</span> Plan, publish, and manage events effortlessly
            </div>

            
            <h1 className="hero-title">
              All your <span style={{ color: "#a5b4fc" }}>events in one place</span>.
            </h1>

            
            <p className="hero-subtitle">
              Create, publish, and manage your events with a unified dashboard.
              From meetups to conferences, keep your attendees informed and
              engaged.
            </p>

            
            <div className="hero-actions">
              <Link href="/events">
                <button className="btn btn-primary">Browse Events</button>
              </Link>
              <Link href="/dashboard/add-event">
                <button className="btn btn-outline">
                  Create your first event
                </button>
              </Link>
            </div>
          </div>

          
          <div
            className="card"
            style={{
              background: "radial-gradient(circle at top, #1e293b, #020617)",
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginBottom: "0.6rem",
              }}
            >
              Live snapshot
            </p>
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.8rem",
              }}
            >
              Upcoming Highlights
            </h3>
            <div style={{ display: "grid", gap: "0.6rem" }}>
              {[
                {
                  title: "AI & Wireless Summit 2025",
                  date: "Apr 18 • Boston",
                  badge: "High priority",
                },
                {
                  title: "Startup Networking Night",
                  date: "Apr 25 • Cambridge",
                  badge: "Tickets running out",
                },
                {
                  title: "Edge Computing Workshop",
                  date: "May 2 • Online",
                  badge: "New",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "0.6rem 0.7rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #1f2937",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.1rem",
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{item.title}</span>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#9ca3af",
                    }}
                  >
                    {item.date}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "#a5b4fc",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why organizers love us</h2>
            <p className="section-subtitle">
              Tools that keep your attendees happy and your event workflow
              smooth.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Centralized dashboard",
                desc: "Track registrations, ticket sales, and event health from a single view.",
              },
              {
                title: "Real-time updates",
                desc: "Publish schedule changes instantly and notify your attendees in seconds.",
              },
              {
                title: "Flexible event types",
                desc: "From in-person to hybrid, handle all formats with consistent UX.",
              },
            ].map((f) => (
              <div key={f.title} className="card">
                <h3
                  style={{
                    fontSize: "1.05rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="upcoming" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Spotlight events</h2>
            <p className="section-subtitle">
              A quick look at what your attendees could be excited about.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Developer Meetup",
                meta: "Apr 28 • 7 PM",
                desc: "A relaxed evening of talks, demos, and Q&A with local devs.",
              },
              {
                title: "Research Poster Night",
                meta: "May 4 • 5 PM",
                desc: "Showcase your latest research to peers and industry experts.",
              },
              {
                title: "Wireless Systems Workshop",
                meta: "May 12 • 2 PM",
                desc: "Hands-on sessions on edge computing and semantic communication.",
              },
            ].map((e) => (
              <div key={e.title} className="card">
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "#a5b4fc",
                    marginBottom: "0.4rem",
                  }}
                >
                  {e.meta}
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {e.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#9ca3af",
                  }}
                >
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What organizers say</h2>
            <p className="section-subtitle">
              Feedback from teams that shipped successful events with this
              workflow.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                name: "Alex Kim",
                role: "Conference Chair",
                quote:
                  "We cut our event planning time almost in half and avoided last-minute chaos.",
              },
              {
                name: "Sofia Martinez",
                role: "Community Manager",
                quote:
                  "The dashboard gives us clarity on what attendees care about in real time.",
              },
              {
                name: "John Patel",
                role: "Workshop Organizer",
                quote:
                  "Perfect for multi-track technical events where schedules change often.",
              },
            ].map((t) => (
              <div key={t.name} className="card">
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#e5e7eb",
                    marginBottom: "0.8rem",
                  }}
                >
                  “{t.quote}”
                </p>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "#9ca3af",
                  }}
                >
                  <span style={{ color: "#e5e7eb" }}>{t.name}</span>
                  {" · "}
                  {t.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <div className="card">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h2
                  className="section-title"
                  style={{ textAlign: "left", marginBottom: "0.4rem" }}
                >
                  Built for teams that care about signal, not noise
                </h2>
                <p
                  className="section-subtitle"
                  style={{ textAlign: "left", maxWidth: 420 }}
                >
                  Keep your event stack minimal and focused. One place for event
                  data, communication, and attendee health.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Events managed", value: "120+" },
                  { label: "Avg. satisfaction", value: "4.8/5" },
                  { label: "Setup time", value: "< 10 min" },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#9ca3af",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              textAlign: "center",
            }}
          >
            <h2 className="section-title">Ready to launch your next event?</h2>
            <p className="section-subtitle">
              Sign in, create an event, and share the link with your attendees
              in minutes.
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/login">
                <button className="btn btn-primary">Register / Login</button>
              </Link>
              <Link href="/events">
                <button className="btn btn-outline">View public events</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

