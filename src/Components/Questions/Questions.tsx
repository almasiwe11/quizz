import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Rootstate"
import Field from "../Field/Field"
import { endQuizz, nextQuestion } from "../../Slices/QuizzSlice"
import { useState } from "react"
import Progress from "./Progress"
import Error from "../../Icons/Error"

const Questions = () => {
  const { questions, currentQuestion, answSelected, darkMode } = useSelector(
    (state: RootState) => state.quizz
  )
  const dispatch = useDispatch()
  const thisQuestion = questions[currentQuestion]
  const [noAnswer, setNoAnswer] = useState(false)

  function handleNextQuestion() {
    if (!answSelected) {
      setNoAnswer(true)
      return
    }
    setNoAnswer(false)
    if (currentQuestion < questions.length - 1) {
      dispatch(nextQuestion())
    } else {
      dispatch(endQuizz())
    }
  }

  return (
    <div className="layout">
      <div
        className={`flex flex-col gap-3 ${
          darkMode ? "text-grayish" : "text-gray-dark"
        }`}
      >
        <p className="text-gray">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <h1 className="font-bold text-2xl max-w-sm select-none">
          {thisQuestion.question}
        </h1>
      </div>

      <div className="flex flex-col gap-4">
        {thisQuestion.options.map((option, i) => (
          <Field
            key={option}
            text={option}
            index={i}
            correctAns={thisQuestion.answer}
          />
        ))}
      </div>
      <Progress />
      <div className="mt-4">
        <button
          onClick={handleNextQuestion}
          className="bg-pink duration-300 ease-in-out hover:bg-pink/60 text-white font-bold rounded-xl w-full p-3"
        >
          {!answSelected
            ? "Submit Question"
            : currentQuestion === questions.length - 1
            ? "End Quizz"
            : "Next Question"}
        </button>
        {noAnswer && !answSelected && (
          <div className="text-tomato mt-4 flex-center">
            <Error />
            Please selecet an answer
          </div>
        )}
      </div>
    </div>
  )
}

export default Questions
