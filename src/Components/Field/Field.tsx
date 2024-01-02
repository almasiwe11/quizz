import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Rootstate"
import { rightAnswer, wrongAnswer } from "../../Slices/QuizzSlice"
import Correct from "../../Icons/Correct"
import Error from "../../Icons/Error"

type Props = {
  icon?: string
  text: string
  onStart?: (a: string) => void
  onClick?: (b: string) => void
  correctAns?: string
  index?: number
}

const Field = ({ icon, text, onStart, index, correctAns }: Props) => {
  const { answSelected } = useSelector((state: RootState) => state.quizz)
  const dispatch = useDispatch()

  const [showAns, setShowAnsw] = useState("hidden")
  const options = ["A", "B", "C", "D"]

  function onChoose() {
    if (onStart) {
      onStart(text)
      return
    }

    if (answSelected) return
    console.log("hererere")
    if (text === correctAns) {
      setShowAnsw("right")
      dispatch(rightAnswer())
    } else {
      setShowAnsw("wrong")
      dispatch(wrongAnswer())
    }
  }

  return (
    <div
      onClick={onChoose}
      className={`bg-white group hover:border-pink border-2 border-transparent rounded-xl h-16  font-semibold p-2.5 shadow-sm flex gap-6  items-center ${
        !answSelected ? "cursor-pointer" : "pointer-events-none"
      } ${showAns === "right" && "border-2 border-green"} ${
        showAns === "wrong" && "border-2 border-tomato"
      }`}
    >
      {icon && <img src={icon} />}
      {typeof index === "number" && index >= 0 && (
        <div
          className={`bg-grayish ${
            showAns === "right" && text === correctAns && "bg-green text-white"
          } ${
            showAns !== "hidden" &&
            text !== correctAns &&
            "bg-tomato text-white"
          } group-hover:bg-pink group-hover:text-white p-2 px-3 rounded-lg text-gray-light`}
        >
          {options[index]}
        </div>
      )}
      <span className="mr-auto select-none">{text}</span>
      {answSelected && text === correctAns && <Correct />}
      {showAns !== "hidden" && text !== correctAns && <Error />}
    </div>
  )
}

export default Field
