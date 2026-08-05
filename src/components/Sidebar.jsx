import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "▦", path: "/dashboard" },
  { key: "summaries", label: "My Summaries", icon: "📄", path: "/summaries" },
  { key: "profile", label: "Profile", icon: "👤", path: "/profile" },
];

const footerItems = [
  { key: "settings", label: "Settings", icon: "⚙", path: "/settings" },
  { key: "support", label: "Support", icon: "❓", path: "/support" },
];

export default function Sidebar({ active = "dashboard" }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">⚡</div>
        <div className="sidebar-logo-text">
          <div className="name">SummAI</div>
          <div className="tagline">COGNITIVE ASSISTANT</div>
        </div>
      </div>

      <button className="new-summary-btn" onClick={() => navigate("/upload")}>
        + New Summary
      </button>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className={`sidebar-link ${active === item.key ? "active" : ""}`}
          >
            <span>{item.icon}</span> {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        {footerItems.map((item) => (
          <Link key={item.key} to={item.path} className="sidebar-link">
            <span>{item.icon}</span> {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}