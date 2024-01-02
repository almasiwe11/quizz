import { useDispatch, useSelector } from "react-redux"
import Topic from "../Topic/Topic"
import { RootState } from "../../Rootstate"
import { playAgain } from "../../Slices/QuizzSlice"

const Final = () => {
  const { score, questions } = useSelector((state: RootState) => state.quizz)
  const dispatch = useDispatch()
  return (
    <div className="layout">
      <div className="text-5xl font-semibold">
        <span>Quiz completed</span>
        <br />
        <span className="font-bold">You scored...</span>
      </div>
      <div>
        <div className="bg-white rounded-xl p-12">
          <div className="flex flex-col items-center gap-6">
            <Topic />
            <p className="text-6xl font-bold ">{score}</p>
            <p className="text-gray">ouf of {questions.length}</p>
          </div>
        </div>
        <button
          onClick={() => dispatch(playAgain())}
          className="bg-pink duration-300 text-xl ease-in-out mt-6 hover:bg-pink/60 text-white font-bold rounded-xl w-full p-5"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default Final
