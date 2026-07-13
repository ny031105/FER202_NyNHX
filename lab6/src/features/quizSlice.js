import { createSlice } from "@reduxjs/toolkit";
import questions from "../data/questions";

const initialState = {
  questions,
  currentQuestion: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;

      const q = state.questions.find((x) => x.id === questionId);

      if (q) {
        q.selectedAnswer = answer;
      }
    },

    nextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1)
        state.currentQuestion++;
    },

    prevQuestion: (state) => {
      if (state.currentQuestion > 0)
        state.currentQuestion--;
    },

    firstQuestion: (state) => {
      state.currentQuestion = 0;
    },

    lastQuestion: (state) => {
      state.currentQuestion = state.questions.length - 1;
    },
  },
});

export const {
  selectAnswer,
  nextQuestion,
  prevQuestion,
  firstQuestion,
  lastQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;