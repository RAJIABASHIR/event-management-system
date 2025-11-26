"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { logout } from "../lib/firebaseAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Error logging out");
    }
  };

  const displayName =
    user?.displayName || user?.email?.split("@")[0] || "Account";

  return (
    <header className="navbar-root">
      <nav className="container" style={{ padding: "0.75rem 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "999px",
                background:
                  "radial-gradient(circle at top left, #6366f1, #22c55e)",
              }}
            />
            <Link href="/">
              <span
                style={{
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  fontSize: "1rem",
                }}
              >
                Event Management
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="nav-links-desktop">
            <div className="nav-links-desktop-inner">
              <Link href="/#features">Features</Link>
              <Link href="/#upcoming">Upcoming</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/events">Browse Events</Link>
            </div>

            {user ? (
              <div style={{ position: "relative" }}>
                <button
                  className="btn btn-outline nav-user-btn"
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  {displayName}
                </button>

                {dropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      marginTop: "0.5rem",
                      background: "#020617",
                      borderRadius: "0.75rem",
                      border: "1px solid #1f2937",
                      minWidth: 220,
                      padding: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.4rem 0.6rem",
                        fontSize: "0.8rem",
                        color: "#9ca3af",
                        borderBottom: "1px solid #111827",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Signed in as
                      <br />
                      <span style={{ color: "#e5e7eb" }}>
                        {user.email ?? user.uid}
                      </span>
                    </div>
                    <Link
                      href="/dashboard/add-event"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.6rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      Add Event
                    </Link>
                    <Link
                      href="/dashboard/manage-events"
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.6rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      Manage Events
                    </Link>
                    <button
                      onClick={handleLogout}
                      style={{
                        marginTop: "0.4rem",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                        background: "transparent",
                        color: "#f97373",
                        fontSize: "0.85rem",
                        padding: "0.4rem 0.6rem",
                        cursor: "pointer",
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <button className="btn btn-primary">Register / Login</button>
              </Link>
            )}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="nav-mobile-actions">
            <button
              type="button"
              className="icon-pill"
              aria-label="Open menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="nav-links-mobile">
            <div
              style={{
                padding: "0.75rem 0 0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <Link href="/#features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
              <Link href="/#upcoming" onClick={() => setMenuOpen(false)}>
                Upcoming
              </Link>
              <Link
                href="/#testimonials"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link href="/events" onClick={() => setMenuOpen(false)}>
                Browse Events
              </Link>

              {user ? (
                <>
                  <Link
                    href="/dashboard/add-event"
                    onClick={() => setMenuOpen(false)}
                  >
                    Add Event
                  </Link>
                  <Link
                    href="/dashboard/manage-events"
                    onClick={() => setMenuOpen(false)}
                  >
                    Manage Events
                  </Link>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      handleLogout();
                    }}
                    style={{
                      marginTop: "0.4rem",
                      border: "none",
                      background: "transparent",
                      color: "#f97373",
                      textAlign: "left",
                      padding: 0,
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" onClick={() => setMenuOpen(false)}>
                  <button className="btn btn-primary">
                    Register / Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


