import Sidebar from "../components/Sidebar";
import "./MySummaries.css";

const summaries = [
  {
    title: "The Future of Scale: Strategic Operations",
    desc: "Key insights on hyper-growth and architectural...",
    status: "Completed",
    time: "8m read",
    date: "Oct 24, 2023",
  },
  {
    title: "Cognitive Resilience",
    desc: "Deep dive into neurological patterns during high-stress",
    status: "In Progress",
    percent: 65,
    time: "12m read",
    date: "Nov 02, 2023",
  },
  {
    title: "The AI Era: Governance & Policy",
    desc: "Exploring the legal frameworks and ethical...",
    status: "Completed",
    time: "15m read",
    date: "Oct 30, 2023",
  },
  {
    title: "Creative Flow: The Psychology of Optimal Experience",
    desc: "Understanding the state of total immersion in activity...",
    status: "Completed",
    time: "10m read",
    date: "Oct 15, 2023",
  },
  {
    title: "Modern Data Architecture",
    desc: "Frameworks for building scalable, real-time data...",
    status: "In Progress",
    percent: 22,
    time: "20m read",
    date: "Nov 10, 2023",
  },
];

export default function MySummaries() {
  return (
    <div className="mysum-layout">
      <Sidebar active="summaries" />

      <main className="mysum-main">
        <div className="mysum-topbar">
          <input
            className="dashboard-search"
            placeholder="Search summaries, authors, or topics..."
            style={{
              flex: 1,
              maxWidth: 480,
              padding: "10px 16px",
              borderRadius: 10,
              border: "none",
              background: "#eef0f7",
            }}
          />
          <div style={{ display: "flex", gap: 16, marginLeft: "auto", alignItems: "center" }}>
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">❓</button>
            <button className="upload-btn">Upload</button>
            <div className="avatar" />
          </div>
        </div>

        <div className="mysum-header-row">
          <div>
            <h1>My Summaries</h1>
            <p>Manage and revisit your cognitive insights library.</p>
          </div>
          <div className="mysum-controls">
            <div className="mysum-icon-toggle">
              <button className="active">▦</button>
              <button>☰</button>
            </div>
            <button className="mysum-pill-btn">⚟ Filter</button>
            <button className="mysum-pill-btn">☰ Recently Added</button>
          </div>
        </div>

        <div className="mysum-grid">
          {summaries.map((s) => {
            const isCompleted = s.status === "Completed";
            return (
              <div className="book-summary-card" key={s.title}>
                <div className="book-summary-cover">
                  <span className={`status-badge ${isCompleted ? "completed" : "in-progress"}`}>
                    {s.status}
                  </span>
                </div>
                <div className="book-summary-body">
                  <h3 className="book-summary-title">{s.title}</h3>
                  <p className="book-summary-desc">{s.desc}</p>

                  {!isCompleted && (
                    <div className="processing-row">
                      <div className="processing-track">
                        <div className="processing-fill" style={{ width: `${s.percent}%` }} />
                      </div>
                      <span className="processing-label">{s.percent}% PROCESSED</span>
                    </div>
                  )}

                  <div className="book-summary-meta">
                    <span>⏱ {s.time}</span>
                    <span>{s.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mysum-footer">
          <span className="mysum-footer-text">Showing 5 of 128 summaries</span>
          <button className="load-more-btn">Load More Summaries</button>
        </div>
      </main>
    </div>
  );
}