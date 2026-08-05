import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./SummaryResult.css";

const sections = [
  {
    number: "01",
    title: "No One's Crazy",
    body: "Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe 80% of how you think the world works. People from different generations, raised by different parents who earned different incomes and held different values, in different parts of the world, born into different economies, experiencing different job markets with different incentives and different degrees of luck, learn very different lessons.",
  },
  {
    number: "02",
    title: "Luck & Risk",
    body: "Nothing is as good or as bad as it seems. Luck and risk are both the reality that every outcome in life is guided by forces other than individual effort.",
  },
  {
    number: "03",
    title: "Never Enough",
    body: "When rich people do crazy things, it's rarely because they're irrational — it's because they're trying to feel something that no amount of money can buy: enough.",
  },
];

export default function SummaryResult() {
  const [openSection, setOpenSection] = useState("01");

  return (
    <div className="summary-layout">
      <Sidebar active="summaries" />

      <main className="summary-main">
        <div className="summary-content">
          <div className="summary-topbar">
            <input
              className="dashboard-search"
              placeholder="Search summaries..."
              style={{
                flex: 1,
                maxWidth: 420,
                padding: "10px 16px",
                borderRadius: 10,
                border: "none",
                background: "#eef0f7",
              }}
            />
            <div style={{ display: "flex", gap: 16, marginLeft: "auto", alignItems: "center" }}>
              <button className="icon-btn">🔔</button>
              <button className="icon-btn">❓</button>
              <button className="upload-btn">⬆ Upload</button>
              <div className="avatar" />
            </div>
          </div>

          <div className="summary-breadcrumb">
            Summaries &gt; <span>Psychology of Money</span>
          </div>

          <div className="book-card">
            <div className="book-cover" />
            <div>
              <span className="summary-ready-badge">Summary Ready</span>
              <h1 className="book-title">The Psychology of Money</h1>
              <p className="book-subtitle">Timeless lessons on wealth, greed, and happiness.</p>
              <div className="book-meta-row">
                <span className="book-meta-item">⏱ 12 min read</span>
                <span className="book-meta-item">💡 8 key insights</span>
                <span className="book-meta-item">📕 Hardcover</span>
              </div>
            </div>
          </div>

          <div className="content-card">
            <h2>The Core Premise</h2>
            <p>
              Doing well with money isn't necessarily about what you know.
              It's about how you behave. And behavior is hard to teach, even
              to really smart people. A genius who loses control of their
              emotions can be a financial disaster. The opposite is also
              true. Ordinary folks with no financial education can be
              wealthy if they have a handful of behavioral skills that have
              nothing to do with standard measures of intelligence.
            </p>

            <div className="quote-block">
              <p>"The hardest financial skill is getting the goalpost to stop moving."</p>
            </div>

            {sections.map((s) => {
              const isOpen = openSection === s.number;
              return (
                <div className="accordion-item" key={s.number}>
                  <button
                    className={`accordion-header ${isOpen ? "open" : ""}`}
                    onClick={() => setOpenSection(isOpen ? null : s.number)}
                  >
                    <span className="accordion-number">{s.number}</span>
                    <span className="accordion-title">{s.title}</span>
                    <span className={`accordion-chevron ${isOpen ? "open" : ""}`}>⌄</span>
                  </button>
                  {isOpen && <div className="accordion-body">{s.body}</div>}
                </div>
              );
            })}
          </div>

          <div className="team-footer">
            <div className="team-footer-left">
              <div className="team-avatar-count">+12</div>
              <span className="team-footer-text">Recently read by your team</span>
            </div>
            <button className="mark-read-btn">Mark as Read</button>
          </div>
        </div>

        <div className="action-rail">
          <div className="rail-card">
            <button className="rail-btn">
              <span className="rail-icon">❓</span> QUIZ
            </button>
            <button className="rail-btn">
              <span className="rail-icon">🎧</span> AUDIO
            </button>
            <button className="rail-btn">
              <span className="rail-icon">⬇</span> PDF
            </button>
            <button className="rail-btn">
              <span className="rail-icon">🔖</span> SAVE
            </button>
            <button className="rail-btn">
              <span className="rail-icon">↗</span> SHARE
            </button>
          </div>
          <div className="progress-ring">
            <div className="progress-ring-inner">45%</div>
          </div>
        </div>
      </main>
    </div>
  );
}