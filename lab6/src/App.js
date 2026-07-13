import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Review from "./pages/Review";
import Summary from "./pages/Summary";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/quiz" />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/quiz/review" element={<Review />} />

        <Route path="/quiz/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;