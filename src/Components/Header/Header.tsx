import Moondark from "../../Icons/Moondark"
import Sundark from "../../Icons/Sundark"
import Toggler from "./Toggler"
import Topic from "../Topic/Topic"

const Header = () => {
  return (
    <div className="flex  items-center my-14 justify-between">
      <Topic />
      <div className="flex gap-4 ml-auto">
        <Sundark />
        <Toggler />
        <Moondark />
      </div>
    </div>
  )
}

export default Header
