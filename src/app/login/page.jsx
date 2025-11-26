"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  loginWithGoogle,
  loginWithEmail,
  registerWithEmail,
} from "../lib/firebaseAuth";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await loginWithGoogle();
      toast.success("Logged in with Google");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }
    try {
      setLoading(true);
      if (mode === "login") {
        await loginWithEmail(email, password);
        toast.success("Logged in");
      } else {
        await registerWithEmail(email, password);
        toast.success("Account created & logged in");
      }
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Authentication error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">
            {mode === "login" ? "Welcome back" : "Create an account"}
          </h1>
          <p className="section-subtitle">
            Sign in to manage events or browse as a guest.
          </p>
        </div>

        <div className="form">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: "0.75rem" }}
            onClick={handleGoogle}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Continue with Google"}
          </button>

          <div
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              color: "#6b7280",
              margin: "0.5rem 0",
            }}
          >
            or use email and password
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "0.5rem" }}
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : mode === "login"
                ? "Login"
                : "Register"}
            </button>
          </form>

          <div
            style={{
              marginTop: "0.8rem",
              fontSize: "0.8rem",
              textAlign: "center",
              color: "#9ca3af",
            }}
          >
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#a5b4fc",
                    cursor: "pointer",
                  }}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#a5b4fc",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
