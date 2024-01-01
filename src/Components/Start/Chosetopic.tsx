import Field from "../Field/Field"

import data from "../../data/data.json"
import { useState } from "react"

const Chosetopic = () => {
  const [topic, setTopic] = useState("")
  const topics = data.quizzes

  function selectTopic(topicName: string) {
    setTopic(topicName)
  }

  return (
    <div className="flex flex-col gap-5">
      {topics.map((topic) => (
        <Field
          icon={topic.icon}
          text={topic.title}
          key={topic.title}
          onStart={selectTopic}
        />
      ))}
    </div>
  )
}

export default Chosetopic
