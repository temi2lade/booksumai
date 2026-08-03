import "./Sidebar.css";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "▦" },
  { key: "summaries", label: "My Summaries", icon: "📄" },
  { key: "profile", label: "Profile", icon: "👤" },
];

const footerItems = [
  { key: "settings", label: "Settings", icon: "⚙" },
  { key: "support", label: "Support", icon: "❓" },
];

export default function Sidebar({ active = "dashboard", onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">⚡</div>
        <div className="sidebar-logo-text">
          <div className="name">SummAI</div>
          <div className="tagline">COGNITIVE ASSISTANT</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.key}
            className={`sidebar-link ${active === item.key ? "active" : ""}`}
            onClick={() => onNavigate?.(item.key)}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        {footerItems.map((item) => (
          <button
            key={item.key}
            className="sidebar-link"
            onClick={() => onNavigate?.(item.key)}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
}