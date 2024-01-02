import { useSelector } from "react-redux"
import Header from "./Components/Header/Header"
import Start from "./Components/Start/Start"
import { RootState } from "./Rootstate"
import Questions from "./Components/Questions/Questions"
import Final from "./Components/Final/Final"

function App() {
  const { status, darkMode } = useSelector((state: RootState) => state.quizz)
  return (
    <div
      className={`min-h-screen overflow-y-hidden ${
        darkMode
          ? "mobile-dark md:tablet-dark lg:bg-desktop-dark bg-gray-dark"
          : "bg-grayish"
      } bg-cover bg-no-repeat`}
    >
      <div className="wrapper">
        <Header />
        {status === "selection" && <Start />}
        {status === "playing" && <Questions />}
        {status === "finished" && <Final />}
      </div>
    </div>
  )
}

export default App
