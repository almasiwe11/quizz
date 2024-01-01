import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "../Types/Quizz"
import data from "../data/data.json"

const initialState: initialState = {
  status: "selection",
  questions: [],
  currentQuestion: 0,
  score: 0,
  topic: "",
}

const quizzSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {
    start(state, action: PayloadAction<string>) {
      const qs =
        data.quizzes.find((question) => question.title === action.payload)
          ?.questions || []
      return {
        ...state,
        status: "playing",
        topic: action.payload,
        questions: qs,
      }
    },

    rightAnswer(state) {
      return {
        ...state,
        score: state.score + 1,
        currentQuestion: state.currentQuestion + 1,
      }
    },

    wrongAnswer(state) {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      }
    },

    endQuizz(state) {
      return {
        ...state,
        status: "finished",
      }
    },
  },
})

export const { start, rightAnswer, wrongAnswer, endQuizz } = quizzSlice.actions

export default quizzSlice.reducer
