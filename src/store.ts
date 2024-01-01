import { configureStore } from "@reduxjs/toolkit"
import quizzSlice from "./Slices/QuizzSlice"

const store = configureStore({
  reducer: {
    quizz: quizzSlice,
  },
})

export default store
