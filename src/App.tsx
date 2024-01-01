import { useSelector } from "react-redux"
import Header from "./Components/Header/Header"
import Start from "./Components/Start/Start"
import { RootState } from "./Rootstate"
import Questions from "./Components/Questions/Questions"

function App() {
  const { status } = useSelector((state: RootState) => state.quizz)
  return (
    <div className="h-screen overflow-y-hidden bg-grayish">
      <div className="wrapper">
        <Header />
        {status === "selection" && <Start />}
        {status === "playing" && <Questions />}
      </div>
    </div>
  )
}

export default App
