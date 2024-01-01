import Field from "../Field/Field"

import data from "../../data/data.json"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { start } from "../../Slices/QuizzSlice"

const Chosetopic = () => {
  const dispatch = useDispatch()
  const topics = data.quizzes

  function startQuizz(topicName: string) {
    dispatch(start(topicName))
  }

  return (
    <div className="flex flex-col gap-5">
      {topics.map((topic) => (
        <Field
          icon={topic.icon}
          text={topic.title}
          key={topic.title}
          onStart={startQuizz}
        />
      ))}
    </div>
  )
}

export default Chosetopic
