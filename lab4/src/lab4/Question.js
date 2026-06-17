import React, { useContext, useState } from "react";
import QuizContext from "./QuizContext";

function Question({
  questionData,
  currentQuestionIndex,
  handleAnswerSelect
}) {

  const { setSelectedAnswer } =
    useContext(QuizContext);

  const [selected, setSelected] =
    useState("");

  const handleNext = () => {
    if (selected !== "") {
      handleAnswerSelect(selected);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto"
      }}
    >
      <h2 style={{ color: "#dc3545" }}>
        Question {currentQuestionIndex + 1}
      </h2>

      <p>{questionData.question}</p>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "5px"
        }}
      >
        {questionData.answers.map(
          (answer, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                borderBottom:
                  index ===
                  questionData.answers.length - 1
                    ? "none"
                    : "1px solid #ddd"
              }}
            >
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  checked={selected === answer}
                  onChange={(e) => {
                    setSelected(
                      e.target.value
                    );

                    setSelectedAnswer(
                      e.target.value
                    );
                  }}
                />

                {" "}
                {answer}
              </label>
            </div>
          )
        )}
      </div>

      <button
        onClick={handleNext}
        style={{
          marginTop: "15px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Question;