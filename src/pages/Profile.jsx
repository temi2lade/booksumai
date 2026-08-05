import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./Profile.css";

function Toggle({ on, onClick }) {
  return (
    <button className={`toggle-switch ${on ? "on" : ""}`} onClick={onClick}>
      <span className="toggle-switch-knob" />
    </button>
  );
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Account");
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Rivera");
  const [email, setEmail] = useState("alex.rivera@summai.io");
  const [bio, setBio] = useState(
    "Senior Product Researcher focused on cognitive AI applications and information density patterns. I use SummAI to synthesize 20+ whitepapers a week."
  );

  const [darkMode, setDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  const tabs = ["Account", "Security", "Preferences", "Billing"];

  return (
    <div className="profile-layout">
      <Sidebar active="profile" />

      <div className="profile-main">
        <div className="profile-topnav">
          <span className="profile-topnav-logo">SummAI</span>
          <Link to="/dashboard" className="profile-topnav-link">Dashboard</Link>
          <Link to="/summaries" className="profile-topnav-link">My Summaries</Link>
          <Link to="/profile" className="profile-topnav-link active">Profile</Link>
          <div className="profile-topnav-icons">
            <input
              placeholder="Search insights..."
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 13,
                width: 220,
              }}
            />
            <button className="icon-btn">🔔</button>
            <button className="icon-btn">❓</button>
            <button className="upload-btn">Upload</button>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-header-row">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar" />
              <button className="profile-avatar-edit">✎</button>
            </div>
            <div>
              <h1 className="profile-name">{firstName} {lastName}</h1>
              <p className="profile-email">{email}</p>
              <div className="profile-badges">
                <span className="profile-badge pro">Pro Plan</span>
                <span className="profile-badge verified">Verified User</span>
              </div>
            </div>
          </div>

          <div className="profile-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`profile-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="profile-section-row">
            <div className="profile-section-label-col">
              <h2 className="profile-section-title">Profile Info</h2>
              <p className="profile-section-desc">
                Update your personal details and public biography.
              </p>
            </div>
            <div className="profile-form-card">
              <div className="form-row-2col">
                <div className="form-field">
                  <label>First Name</label>
                  <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-field">
                  <label>Last Name</label>
                  <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="form-field">
                <label>Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-field">
                <label>Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>
              <button className="save-changes-btn">Save Changes</button>
            </div>
          </div>

          <div className="profile-section-row">
            <div className="profile-section-label-col">
              <h2 className="profile-section-title">Preferences</h2>
              <p className="profile-section-desc">
                Customize your reading experience and notification frequency.
              </p>
            </div>
            <div className="profile-form-card">
              <div className="toggle-row">
                <div>
                  <h4>Dark Mode</h4>
                  <p>Switch between light and dark UI themes.</p>
                </div>
                <Toggle on={darkMode} onClick={() => setDarkMode((v) => !v)} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Push Notifications</h4>
                  <p>Get notified when summaries are ready.</p>
                </div>
                <Toggle on={pushNotifications} onClick={() => setPushNotifications((v) => !v)} />
              </div>
              <div className="toggle-row">
                <div>
                  <h4>Weekly Email Digest</h4>
                  <p>Synthesized overview of your weekly readings.</p>
                </div>
                <Toggle on={weeklyDigest} onClick={() => setWeeklyDigest((v) => !v)} />
              </div>
            </div>
          </div>

          <div className="profile-section-row">
            <div className="profile-section-label-col">
              <h2 className="danger-zone-title">Danger Zone</h2>
              <p className="profile-section-desc">
                Irreversible actions regarding your account data.
              </p>
            </div>
            <div className="profile-form-card" style={{ padding: 0, border: "none", background: "transparent" }}>
              <div className="danger-card">
                <div>
                  <h4>Delete Account</h4>
                  <p>Permanently remove all your summaries and personal data.</p>
                </div>
                <button className="delete-account-btn">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}