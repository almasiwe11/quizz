import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "../Types/Quizz"

const initialState: initialState = {
  status: "selection",
}

const quizzSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {
    start(state, action) {
      return state
    },
  },
})

export const { start } = quizzSlice.actions

export default quizzSlice.reducer
