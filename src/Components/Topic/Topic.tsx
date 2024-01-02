import { useSelector } from "react-redux"
import { RootState } from "../../Rootstate"
import data from "../../data/data.json"

const Topic = () => {
  const { topic } = useSelector((state: RootState) => state.quizz)
  const currentTopic = data.quizzes.find((top) => top.title === topic)
  return (
    <>
      {currentTopic && (
        <div className="flex gap-3 items-center">
          <img src={currentTopic.icon} />
          <p className="font-semibold text-xl">{topic}</p>
        </div>
      )}
    </>
  )
}

export default Topic
