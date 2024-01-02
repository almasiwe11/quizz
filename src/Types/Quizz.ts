type initialState = {
  status: "selection" | "playing" | "finished"
  questions: Question[]
  topic: string
  score: number
  currentQuestion: number
  answSelected: boolean
  darkMode: boolean
}

type Question = {
  question: string
  options: string[]
  answer: string
}

export type { initialState, Question }
