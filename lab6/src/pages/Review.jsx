import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Review() {
  const navigate = useNavigate();

  const { questions } = useSelector((state) => state.quiz);

  return (
    <div className="quiz-container">
      <div className="title">
        <h1>Quiz Review</h1>
      </div>

      {questions.map((q) => {
        const correct = q.selectedAnswer === q.answer;

        return (
          <div
            key={q.id}
            className={correct ? "correct" : "wrong"}
          >
            <h3>
              {q.id}. {q.question}
            </h3>

            <div className="option-grid">
              {q.options.map((option) => (
                <div key={option} className="review-option">
                  <input
                    type="radio"
                    checked={q.selectedAnswer === option}
                    readOnly
                  />

                  {option}
                </div>
              ))}
            </div>

            <p className="answer">
              Right answer is: <b>{q.answer}</b>
            </p>
          </div>
        );
      })}

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

export default Review;