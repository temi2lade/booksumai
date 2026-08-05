import { Link } from "react-router-dom";
import "./Landing.css";

const features = [
  {
    icon: "📖",
    title: "AI Summaries",
    desc: "Get the core concepts of any non-fiction book in under 5 minutes with our contextual extraction engine.",
  },
  {
    icon: "❓",
    title: "Smart Quizzes",
    desc: "Verify your understanding with AI-generated questions that target the most critical takeaways from each chapter.",
  },
  {
    icon: "🎧",
    title: "Audio Versions",
    desc: "Listen on the go with high-fidelity neural narration that sounds human, capturing the nuance of the text.",
  },
];

const steps = [
  {
    number: "1",
    title: "Select your Book",
    desc: "Upload any PDF or search our vast library of 50,000+ non-fiction titles.",
  },
  {
    number: "2",
    title: "Neural Distillation",
    desc: "Our AI analyzes structure, tone, and core thesis to create a layered summary.",
  },
  {
    number: "3",
    title: "Apply Knowledge",
    desc: "Review key insights, take smart quizzes, and save highlights to your workspace.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Entrepreneur",
    quote:
      "SummAI has completely changed how I consume industry knowledge. I can stay ahead of trends without spending 20 hours on a single book.",
  },
  {
    name: "Marcus Thorne",
    role: "Product Manager",
    quote:
      "The quizzes are the killer feature. It's one thing to read a summary, another to prove you actually understood the framework.",
  },
  {
    name: "Alex Rivera",
    role: "PhD Student",
    quote:
      "I use the audio versions during my commute. The narration quality is better than any other AI reader I've used previously.",
  },
];

export default function Landing() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <span className="landing-logo">SummAI</span>
        <a href="#features" className="landing-nav-link">Features</a>
        <a href="#how-it-works" className="landing-nav-link">How it works</a>
        <a href="#pricing" className="landing-nav-link">Pricing</a>
        <div className="landing-nav-right">
          <Link to="/" className="landing-login-link">Login</Link>
          <Link to="/" className="landing-nav-cta">Get Started</Link>
        </div>
      </nav>

      <section className="landing-hero">
        <span className="hero-badge">v2.0 Cognitive Engine Live</span>
        <h1 className="hero-title">
          Understand Books in <span className="highlight">Minutes</span> with AI
        </h1>
        <p className="hero-subtitle">
          Experience distraction-free knowledge acquisition. Our neural
          networks distill complex non-fiction into high-fidelity cognitive
          maps.
        </p>
        <div className="hero-cta-row">
          <Link to="/" className="hero-btn-primary">Get Started</Link>
          <button className="hero-btn-secondary">Watch Demo</button>
        </div>

        <div className="hero-image-frame">
          <div className="hero-image-box" />
        </div>
      </section>

      <section className="features-section" id="features">
        <h2>Tools for Deep Insight</h2>
        <p>Optimized for high-performance learners.</p>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mastery-section" id="how-it-works">
        <div className="mastery-text">
          <h2>From Discovery to Mastery</h2>
          {steps.map((s) => (
            <div className="mastery-step" key={s.number}>
              <div className="mastery-step-number">{s.number}</div>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mastery-image-box" />
      </section>

      <section className="testimonials-section">
        <h2>Loved by Rapid Learners</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-header">
                <div className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
              <p>"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to expand your mind?</h2>
        <p>Join 50,000+ professionals and students using SummAI to accelerate their learning journey.</p>
        <div className="cta-banner-buttons">
          <Link to="/" className="cta-btn-white">Start Free Trial</Link>
          <button className="cta-btn-outline">View Enterprise</button>
        </div>
      </div>

      <footer className="landing-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>SummAI</h3>
            <p>
              Empowering cognitive growth through high-fidelity neural
              distillation. The assistant for the modern mind.
            </p>
            <div className="footer-social">
              <span>🌐</span>
              <span>🔗</span>
              <span>✉</span>
            </div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
            <a href="#">Enterprise</a>
            <a href="#">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 SummAI Cognitive Systems Inc. All rights reserved.</span>
          <div className="footer-bottom-links">
            <span>System Status</span>
            <span>Contact Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}