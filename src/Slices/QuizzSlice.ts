import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "../Types/Quizz"
import data from "../data/data.json"

const initialState: initialState = {
  status: "selection",
  questions: [],
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
  },
})

export const { start } = quizzSlice.actions

export default quizzSlice.reducer
