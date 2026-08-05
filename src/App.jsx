import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import SummaryResult from "./pages/SummaryResult";
import Quiz from "./pages/Quiz";
import MySummaries from "./pages/MySummaries";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/summary" element={<SummaryResult />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/summaries" element={<MySummaries />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;