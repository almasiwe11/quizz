import Chosetopic from "./Chosetopic"
import Greeting from "./Greeting"

const Start = () => {
  return (
    <div className="grid grid-cols-2">
      <Greeting />
      <Chosetopic />
    </div>
  )
}

export default Start
