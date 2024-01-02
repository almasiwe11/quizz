import { useState } from "react"
import { useDispatch } from "react-redux"
import { toggleMode } from "../../Slices/QuizzSlice"

const Toggler = () => {
  const [on, isOn] = useState(false)
  const dispatch = useDispatch()

  function onToggle() {
    dispatch(toggleMode())
    isOn((prev) => !prev)
  }

  return (
    <div
      onClick={onToggle}
      className="h-7 rounded-full bg-pink w-12 cursor-pointer"
    >
      <div
        className={`bg-white rounded-full w-5 h-5 my-1 mx-1 duration-300 esae-in-out ${
          on ? "translate-x-[100%]" : "translate-x-[0%]"
        }`}
      ></div>
    </div>
  )
}

export default Toggler
