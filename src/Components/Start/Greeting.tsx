import { useSelector } from "react-redux"
import { RootState } from "../../Rootstate"

const Greeting = () => {
  const { darkMode } = useSelector((state: RootState) => state.quizz)
  return (
    <div
      className={`flex flex-col gap-10 ${
        darkMode ? "text-grayish" : "text-gray-dark"
      }`}
    >
      <h1 className="text-5xl">
        Welcome to the <br></br>
        <span className="font-bold">Frontend quiz!</span>
      </h1>

      <p className="">Pick a subject to get started.</p>
    </div>
  )
}

export default Greeting
