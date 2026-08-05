import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Upload.css";

export default function Upload() {
  const [length, setLength] = useState("Short");
  const [tone, setTone] = useState("Academic");

  return (
    <div className="upload-layout">
      <Sidebar active="" />

      <main className="upload-main">
        <div className="upload-topbar">
          <input
            className="dashboard-search"
            placeholder="Search summaries..."
            style={{ flex: 1, maxWidth: 420, padding: "10px 16px", borderRadius: 10, border: "none", background: "#eef0f7" }}
          />
          <div style={{ display: "flex", gap: 16, marginLeft: "auto", alignItems: "center" }}>
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">❓</button>
            <div className="avatar" />
          </div>
        </div>

        <div className="upload-header">
          <h1>Create New Summary</h1>
          <p>Upload your documents and let SummAI distill the core insights for you.</p>
        </div>

        <div className="dropzone">
          <div className="dropzone-icon">⬆</div>
          <h3>Click or drag & drop files here</h3>
          <p>
            Supported formats: PDF, DOCX, JPG, PNG, or plain text.
            <br />
            Up to 50MB per file.
          </p>
        </div>

        <div className="options-grid">
          <div className="option-card">
            <h4>Summary Length</h4>
            <div className="option-pills">
              {["Short", "Medium", "Long"].map((l) => (
                <button
                  key={l}
                  className={`option-pill ${length === l ? "selected" : ""}`}
                  onClick={() => setLength(l)}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="option-card">
            <h4>Style & Tone</h4>
            <div className="option-pills">
              {["Academic", "Simple", "Bullet points"].map((t) => (
                <button
                  key={t}
                  className={`option-pill ${tone === t ? "outline-selected" : ""}`}
                  onClick={() => setTone(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="option-card">
            <h4>Output Language</h4>
            <select className="language-select">
              <option>English (US)</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>

        <div className="generate-btn-wrap">
          <button className="generate-btn">Generate Summary ✨</button>
          <span className="generate-hint">⚡ Usually takes less than 30 seconds</span>
        </div>

        <div className="trust-row">
          <div className="trust-item">
            <div className="trust-icon">🛡</div>
            <div>
              <h5>Privacy Guaranteed</h5>
              <p>Your files are encrypted and never used for training models without permission.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon">📊</div>
            <div>
              <h5>Smart Extraction</h5>
              <p>We identify key stakeholders, dates, and actionable items automatically.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}