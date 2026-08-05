import { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question:
      "Which cognitive bias describes the human tendency to rely too heavily on the first piece of information offered when making decisions?",
    options: [
      { letter: "A", title: "Confirmation Bias", desc: "Filtering information to match pre-existing beliefs." },
      { letter: "B", title: "Anchoring Bias", desc: "Over-weighting initial data points during analysis." },
      { letter: "C", title: "Availability Heuristic", desc: "Estimating likelihood based on ease of recall." },
      { letter: "D", title: "Sunk Cost Fallacy", desc: "Continuing an endeavor due to previous investment." },
    ],
    correct: "B",
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("B");
  const [correctCount, setCorrectCount] = useState(2);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const totalQuestions = 10;
  const q = questions[0];
  const progressPercent = ((current + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (selected === q.correct) {
      setCorrectCount((c) => c + 1);
    } else {
      setIncorrectCount((c) => c + 1);
    }
    setCurrent((c) => Math.min(c + 1, totalQuestions - 1));
    setSelected(null);
  };

  const accuracy =
    correctCount + incorrectCount > 0
      ? Math.round((correctCount / (correctCount + incorrectCount)) * 100)
      : 0;

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="quiz-header-top">
          <span className="quiz-logo">SummAI</span>
          <span className="quiz-version">Cognitive Quiz v2.4</span>
          <div className="quiz-header-icons">
            <button className="icon-btn">❓</button>
            <button className="icon-btn">🔔</button>
            <div className="avatar" />
          </div>
        </div>
        <div className="quiz-progress-track">
          <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="quiz-body">
        <div className="quiz-main-col">
          <div className="question-card">
            <div className="question-card-top">
              <span className="question-pill">
                Question {current + 1} of {totalQuestions}
              </span>
              <span className="question-timer">⏱ 01:45 remaining</span>
            </div>
            <h2 className="question-text">{q.question}</h2>
          </div>

          <div className="options-grid-quiz">
            {q.options.map((opt) => {
              const isSelected = selected === opt.letter;
              return (
                <button
                  key={opt.letter}
                  className={`option-card-quiz ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelected(opt.letter)}
                >
                  <span className="option-letter">{opt.letter}</span>
                  <div>
                    <div className="option-text-title">{opt.title}</div>
                    <div className="option-text-desc">{opt.desc}</div>
                  </div>
                  {isSelected && <span className="option-check">✓</span>}
                </button>
              );
            })}
          </div>

          <div className="quiz-nav-row">
            <button className="quiz-back-btn">← Back</button>
            <button className="quiz-next-btn" onClick={handleNext} disabled={!selected}>
              Next Question →
            </button>
          </div>
        </div>

        <div className="quiz-side-col">
          <div className="side-card">
            <h4>PERFORMANCE LIVE</h4>
            <div className="accuracy-row">
              <span>Accuracy</span>
              <span className="accuracy-value">{accuracy}%</span>
            </div>
            <div className="accuracy-track">
              <div className="accuracy-fill" style={{ width: `${accuracy}%` }} />
            </div>
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-box-label">Correct</div>
                <div className="stat-box-value correct">{correctCount}</div>
              </div>
              <div className="stat-box">
                <div className="stat-box-label">Incorrect</div>
                <div className="stat-box-value incorrect">{incorrectCount}</div>
              </div>
            </div>
          </div>

          <div className="side-card">
            <h4>MASTERY TRACK</h4>
            <div className="mastery-item">
              <span className="mastery-dot" style={{ background: "#22c55e" }} />
              <span className="mastery-name">Behavioral Econ</span>
              <span className="mastery-level">High</span>
            </div>
            <div className="mastery-item">
              <span className="mastery-dot" style={{ background: "#c7d2fe" }} />
              <span className="mastery-name">Logic & Ethics</span>
              <span className="mastery-level">Medium</span>
            </div>
            <div className="mastery-item">
              <span className="mastery-dot" style={{ background: "#e5e7eb" }} />
              <span className="mastery-name">Social Psychology</span>
              <span className="mastery-level">Pending</span>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-card-title">⚡ SummAI Tip</div>
            <p>
              Anchoring bias often occurs in negotiations. AI assistants like
              SummAI can help de-bias your perspective by suggesting
              alternative "anchors."
            </p>
          </div>
        </div>
      </div>

      <div className="quiz-footer">
        <span>© 2024 SummAI Cognitive Assistant</span>
        <div className="quiz-footer-links">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Guidelines</span>
        </div>
      </div>
    </div>
  );
}