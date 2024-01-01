import Chosetopic from "./Chosetopic"
import Greeting from "./Greeting"

const Start = () => {
  return (
    <div className="flex flex-col gap-4 lg:grid grid-cols-2 lg:gap-0">
      <Greeting />
      <Chosetopic />
    </div>
  )
}

export default Start
