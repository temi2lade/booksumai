import { useState } from "react";
import "./Auth.css";
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.4-17.7 10.7z"/>
      <path fill="#4CAF50" d="M24 45c5.5 0 10.4-1.8 14.3-5l-6.6-5.4C29.6 36.6 27 37.5 24 37.5c-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.5 40.6 16.2 45 24 45z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.6 5.4C41.5 35.9 45 30.5 45 24c0-1.4-.1-2.7-.4-3.5z"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#111827">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.49 0-1.87-.87-3.61-.87-1.68 0-2.28.9-3.65.9-1.36 0-2.28-1.29-3.4-2.85C3.99 18.06 3 14.29 3 10.9c0-4.99 3.25-7.63 6.4-7.63 1.65 0 3.03.9 3.83.9.77 0 2.3-1.07 3.98-.9.68.03 2.58.28 3.8 2.06-.1.06-2.27 1.32-2.25 3.94.02 3.13 2.75 4.17 2.78 4.18-.02.06-.44 1.49-1.6 2.9z"/>
    </svg>
  );
}

function EyeIcon({ visible }) {
  return visible ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.6 21.6 0 015.06-6.06M9.9 4.24A10.94 10.94 0 0112 4c7 0 11 7 11 7a21.6 21.6 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function Auth() {
  const [mode, setMode] = useState("register"); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend auth endpoint
    console.log(mode, form);
  };

  const isRegister = mode === "register";

  return (
    <div className="auth-page">
      <div className="auth-brand">
        <div className="auth-brand-logo">
          <span>📖</span> SummAI
        </div>
        <h1>Unlock the core of every document.</h1>
        <p>
          Our high-performance cognitive assistant distills complex
          information into actionable insights, helping you master
          high-density information with ease.
        </p>
        <div className="auth-brand-image">
          <div className="auth-brand-status">
            <span className="status-label">System status</span>
            <span className="status-value">Summarize in seconds</span>
          </div>
        </div>
      </div>

      <div className="auth-form-panel">
        <div className="auth-card">
          <h2>{isRegister ? "Create your account" : "Welcome back"}</h2>
          <p>
            {isRegister
              ? "Enter your details to get started."
              : "Enter your details to access your cognitive space."}
          </p>

          <div className="auth-tabs">
            <button
              className={`auth-tab ${!isRegister ? "active" : ""}`}
              onClick={() => setMode("login")}
              type="button"
            >
              Login
            </button>
            <button
              className={`auth-tab ${isRegister ? "active" : ""}`}
              onClick={() => setMode("register")}
              type="button"
            >
              Register
            </button>
          </div>

          <div className="auth-social-row">
            <button className="auth-social-btn" type="button">
              <GoogleIcon /> Google
            </button>
            <button className="auth-social-btn" type="button">
              <AppleIcon /> Apple
            </button>
          </div>

          <div className="auth-divider">OR EMAIL</div>

          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="auth-field">
                <label htmlFor="name">Full Name</label>
                <div className="auth-input-wrap">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label htmlFor="email">Email Address</label>
              <div className="auth-input-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <div className="auth-field-label-row">
                <label htmlFor="password">Password</label>
                {!isRegister && (
                  <a href="#" className="auth-forgot-link">Forgot Password?</a>
                )}
              </div>
              <div className="auth-input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="auth-eye-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label="Toggle password visibility"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            {isRegister && (
              <div className="auth-field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="auth-input-wrap">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            <button className="auth-submit-btn" type="submit">
              {isRegister ? "Create Account" : "Sign In"} →
            </button>
          </form>

          <p className="auth-card-footer-text">
            Experience the future of cognitive assistance.
          </p>
        </div>

        <div className="auth-links">
          <a href="#">Help Center</a>
          <a href="#">API Reference</a>
          <a href="#">Contact Sales</a>
        </div>
      </div>
    </div>
  );
}