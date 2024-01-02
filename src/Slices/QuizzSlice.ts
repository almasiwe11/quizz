import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "../Types/Quizz"
import data from "../data/data.json"

const initialState: initialState = {
  status: "selection",
  questions: [],
  currentQuestion: 0,
  score: 0,
  topic: "",
  answSelected: false,
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
        answSelected: true,
      }
    },

    wrongAnswer(state) {
      return {
        ...state,
        answSelected: true,
      }
    },

    endQuizz(state) {
      return {
        ...state,
        status: "finished",
      }
    },

    nextQuestion(state) {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answSelected: false,
      }
    },
  },
})

export const { start, rightAnswer, wrongAnswer, endQuizz, nextQuestion } =
  quizzSlice.actions

export default quizzSlice.reducer
