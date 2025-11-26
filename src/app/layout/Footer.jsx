export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #020617",
        marginTop: "3rem",
        padding: "2.5rem 0 1.5rem",
        backgroundColor: "#020617",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ maxWidth: 340 }}>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                marginBottom: "0.9rem",
              }}
            >
              EVENT MANAGEMENT
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#9ca3af",
                lineHeight: 1.6,
              }}
            >
              Event Management helps you plan, publish, and run delightful
              events. From meetups to conferences, we focus on simple
              experiences that help organizers get more done every day.
            </p>
          </div>
          <div style={{ minWidth: 140 }}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.7rem",
              }}
            >
              Company
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.85rem",
                color: "#9ca3af",
              }}
            >
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">About Us</a>
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">Our Mission</a>
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>
          <div style={{ minWidth: 160 }}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.7rem",
              }}
            >
              Information
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.85rem",
                color: "#9ca3af",
              }}
            >
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">Privacy Policy</a>
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>
          <div style={{ minWidth: 180 }}>
            <h3
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.7rem",
              }}
            >
              Social Links
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.85rem",
                color: "#9ca3af",
              }}
            >
              <li style={{ marginBottom: "0.35rem" }}>
                <span style={{ marginRight: "0.4rem" }}>𝕏</span>@event_mgmt
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <span style={{ marginRight: "0.4rem" }}>in</span>/company/event-management
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <span style={{ marginRight: "0.4rem" }}>f</span>@event.management
              </li>
              <li style={{ marginBottom: "0.35rem" }}>
                <span style={{ marginRight: "0.4rem" }}>✉</span>
                support@event-mgmt.io
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #111827",
            paddingTop: "1rem",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#6b7280",
          }}
        >
          © {year} Event Management — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

