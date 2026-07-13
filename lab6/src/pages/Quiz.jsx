import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  firstQuestion,
  lastQuestion,
} from "../features/quizSlice";

function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { questions, currentQuestion } = useSelector(
    (state) => state.quiz
  );

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">

      <div className="title">
        <h1>JavaScript Quiz</h1>
      </div>

      <div className="question">

        <h3>
          {question.id}. {question.question}
        </h3>

        <div className="option-grid">

          {question.options.map((option) => (

            <label
              key={option}
              className="option"
            >

              <input
                type="radio"
                name={`question-${question.id}`}
                value={option}
                checked={question.selectedAnswer === option}
                onChange={() =>
                  dispatch(
                    selectAnswer({
                      questionId: question.id,
                      answer: option,
                    })
                  )
                }
              />

              {option}

            </label>

          ))}

        </div>

      </div>

      <div className="navigation">

        <button
          onClick={() =>
            dispatch(firstQuestion())
          }
        >
          First
        </button>

        <button
          onClick={() =>
            dispatch(prevQuestion())
          }
        >
          Prev
        </button>

        <button
          onClick={() =>
            dispatch(nextQuestion())
          }
        >
          Next
        </button>

        <button
          onClick={() =>
            dispatch(lastQuestion())
          }
        >
          Last
        </button>

      </div>

      <hr />

      <div className="bottom-button">

        <button
          onClick={() =>
            navigate("/quiz")
          }
        >
          Quiz
        </button>

        <button
          onClick={() =>
            navigate("/quiz/review")
          }
        >
          Quiz Review
        </button>

        <button
          onClick={() =>
            navigate("/quiz/summary")
          }
        >
          Submit
        </button>

      </div>

    </div>
  );
}

export default Quiz;