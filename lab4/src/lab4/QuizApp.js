

import React, { useState, useEffect } from "react";
import Question from "./Question";
import Score from "./Score";
import QuizContext from "./QuizContext";

const quizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system"
    ],
    correctAnswer:
      "A JavaScript library for building user interfaces"
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript"
    ],
    correctAnswer:
      "A syntax extension for JavaScript"
  }
];

function QuizApp() {

  const [questions,
    setQuestions] =
    useState([]);

  const [currentQuestion,
    setCurrentQuestion] =
    useState(0);

  const [score,
    setScore] =
    useState(0);

  const [quizEnd,
    setQuizEnd] =
    useState(false);

  const [selectedAnswer,
    setSelectedAnswer] =
    useState("");

  useEffect(() => {

    setQuestions(quizData);

  }, []);

  const handleAnswerSelect =
    (answer) => {

      setSelectedAnswer(answer);

      let newScore = score;

      if (
        answer ===
        questions[currentQuestion]
          .correctAnswer
      ) {
        newScore++;
      }

      if (
        currentQuestion + 1 <
        questions.length
      ) {

        setScore(newScore);

        setCurrentQuestion(
          currentQuestion + 1
        );

      } else {

        setScore(newScore);

        setQuizEnd(true);
      }
    };

  if (questions.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (

    <QuizContext.Provider
      value={{
        selectedAnswer,
        setSelectedAnswer
      }}
    >

      {quizEnd ? (

        <Score score={score} />

      ) : (

        <Question
          questionData={
            questions[currentQuestion]
          }
          currentQuestionIndex={
            currentQuestion
          }
          handleAnswerSelect={
            handleAnswerSelect
          }
        />

      )}

    </QuizContext.Provider>
  );
}

export default QuizApp;