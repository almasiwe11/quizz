import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: "Selection",
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
