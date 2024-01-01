import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Rootstate"
import Field from "../Field/Field"
import { endQuizz, rightAnswer, wrongAnswer } from "../../Slices/QuizzSlice"

const Questions = () => {
  const { questions, currentQuestion } = useSelector(
    (state: RootState) => state.quizz
  )
  const dispatch = useDispatch()
  const thisQuestion = questions[currentQuestion]
  console.log(thisQuestion)

  function onAnswer(answ: string) {
    if (answ === thisQuestion.answer) {
      dispatch(rightAnswer())
    } else {
      dispatch(wrongAnswer())
    }

    if (currentQuestion === questions.length - 1) {
      dispatch(endQuizz())
    }
  }

  return (
    <div className="layout">
      <div>
        <h1 className="font-bold text-2xl">{thisQuestion.question}</h1>
      </div>

      <div className="flex flex-col gap-4">
        {thisQuestion.options.map((option) => (
          <Field key={option} text={option} onClick={onAnswer} />
        ))}
      </div>
    </div>
  )
}

export default Questions
