import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  const { questions } = useSelector((state) => state.quiz);

  return (
    <div className="quiz-container">
      <div className="title">
        <h1>Quiz Review</h1>
      </div>

      <div className="summary-container">
        {questions.map((q) => (
          <div className="summary-card" key={q.id}>
            <p>Question No</p>

            <h2>{q.id}</h2>

            <p>
              {q.selectedAnswer
                ? "Answered"
                : "Not Answered"}
            </p>
          </div>
        ))}
      </div>

      <hr />

      <div className="bottom-button">
        <button onClick={() => navigate("/quiz")}>
          Quiz
        </button>

        <button onClick={() => navigate("/quiz/review")}>
          Quiz Review
        </button>

        <button onClick={() => navigate("/quiz/summary")}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Summary;