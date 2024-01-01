import Moondark from "../../Icons/Moondark"
import Sundark from "../../Icons/Sundark"
import Toggler from "./Toggler"

const Header = () => {
  return (
    <div className="flex gap-4 items-center my-14 justify-end">
      <Sundark />
      <Toggler />
      <Moondark />
    </div>
  )
}

export default Header
