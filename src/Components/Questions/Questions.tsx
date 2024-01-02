import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Rootstate"
import Field from "../Field/Field"
import { nextQuestion } from "../../Slices/QuizzSlice"

const Questions = () => {
  const { questions, currentQuestion, answSelected } = useSelector(
    (state: RootState) => state.quizz
  )
  const dispatch = useDispatch()
  const thisQuestion = questions[currentQuestion]

  return (
    <div className="layout">
      <div className="flex flex-col gap-3">
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
        <button
          onClick={() => dispatch(nextQuestion())}
          className="bg-pink duration-300 ease-in-out hover:bg-pink/60 text-white font-bold rounded-xl w-full p-3"
        >
          {!answSelected
            ? "Submit Question"
            : currentQuestion === questions.length - 1
            ? "End Quizz"
            : "Next Question"}
        </button>
      </div>
    </div>
  )
}

export default Questions
