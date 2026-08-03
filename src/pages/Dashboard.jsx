import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

const stats = [
  { icon: "📄", delta: "+12%", value: "128", label: "Documents Uploaded" },
  { icon: "✨", delta: "+4", value: "412", label: "Total Summaries" },
  { icon: "❓", delta: "92% avg", value: "56", label: "Quizzes Completed" },
  { icon: "🎧", delta: "2.4h today", value: "18.5h", label: "Listening Time" },
];

const readingItems = [
  {
    tag: "COGNITIVE SCIENCE",
    title: "Neural Networks in Modern Learning",
    time: "12 min read",
    percent: 65,
  },
  {
    tag: "BUSINESS",
    title: "Scalable Infrastructure for Startups",
    time: "8 min read",
    percent: 20,
  },
];

const activity = [
  {
    icon: "✅",
    title: 'Summary Completed: "Mastering React Hooks"',
    meta: "Technological Review • 2,450 words processed",
    time: "2h ago",
  },
  {
    icon: "❓",
    title: "Quiz Passed: Psychology of Habits",
    meta: "Score: 95% • +50 XP earned",
    time: "Yesterday",
  },
  {
    icon: "🎧",
    title: "Finished Listening: Atomic Habits Ch. 1",
    meta: "14 minutes • 1.5x Speed",
    time: "2 days ago",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar active="dashboard" />

      <main className="dashboard-main">
        <div className="dashboard-topbar">
          <input
            className="dashboard-search"
            placeholder="Search summaries or collections..."
          />
          <div className="dashboard-topbar-icons">
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">❓</button>
            <button className="upload-btn">⬆ Upload</button>
            <div className="avatar" />
          </div>
        </div>

        <div className="dashboard-welcome">
          <div>
            <h1>Welcome back, Alex</h1>
            <p>Ready to accelerate your learning today?</p>
          </div>
          <span className="premium-badge">✓ Premium Active</span>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-card-top">
                <div className="stat-icon">{s.icon}</div>
                <span className="stat-delta">{s.delta}</span>
              </div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="dashboard-content-grid">
          <div>
            <div className="section-header">
              <h3>CONTINUE READING</h3>
              <a href="#">View Library →</a>
            </div>
            <div className="reading-cards-row">
              {readingItems.map((item) => (
                <div className="reading-card" key={item.title}>
                  <div className="reading-card-image">
                    <span className="reading-time-badge">{item.time}</span>
                  </div>
                  <div className="reading-card-body">
                    <span className="reading-card-tag">{item.tag}</span>
                    <h4 className="reading-card-title">{item.title}</h4>
                    <div className="progress-row">
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                      <span className="progress-percent">{item.percent}% Read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-header">
              <h3>QUICK ACTIONS</h3>
            </div>
            <div className="quick-actions-card">
              <h3>New Summary</h3>
              <p>
                Upload a PDF, link, or voice recording to generate an AI
                summary in seconds.
              </p>
              <button className="create-summary-btn">+ Create New Summary</button>
              <div className="quick-actions-row">
                <button className="quick-action-mini-btn">🎙 Record Audio</button>
                <button className="quick-action-mini-btn">🔗 URL Link</button>
              </div>
            </div>
          </div>
        </div>

        <div className="activity-card">
          <div className="activity-card-header">
            <h3>RECENT ACTIVITY</h3>
            <span>⋮</span>
          </div>
          {activity.map((a) => (
            <div className="activity-item" key={a.title}>
              <div className="activity-icon">{a.icon}</div>
              <div className="activity-body">
                <div className="activity-title">{a.title}</div>
                <div className="activity-meta">{a.meta}</div>
              </div>
              <div className="activity-time">{a.time}</div>
            </div>
          ))}
          <div className="activity-footer">
            <a href="#">See full activity log</a>
          </div>
        </div>
      </main>
    </div>
  );
}