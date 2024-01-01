import Header from "./Components/Header/Header"
import Start from "./Components/Start/Start"

function App() {
  return (
    <div className="h-screen overflow-y-hidden bg-grayish">
      <div className="wrapper">
        <Header />
        <Start />
      </div>
    </div>
  )
}

export default App
