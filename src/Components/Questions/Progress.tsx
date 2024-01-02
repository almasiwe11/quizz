import { useSelector } from "react-redux"
import { RootState } from "../../Rootstate"

const Progress = () => {
  const { questions, currentQuestion, answSelected, darkMode } = useSelector(
    (state: RootState) => state.quizz
  )

  const progressNow = currentQuestion + Number(answSelected)

  const progressBar = {
    width: `${(progressNow * 100) / questions.length}%`,
  }

  return (
    <div
      className={`max-w-sm w-full ${
        darkMode ? "bg-gray-mid" : "bg-white"
      } rounded-full h-2 relative`}
    >
      <div
        style={progressBar}
        className="bg-pink absolute duration-300 ease-in-out left-0 top-0 bottom-0 rounded-full"
      ></div>
    </div>
  )
}

export default Progress
