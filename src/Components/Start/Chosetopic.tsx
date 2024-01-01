import Field from "../Field/Field"

import data from "../../data/data.json"

const Chosetopic = () => {
  const topics = data.quizzes
  return (
    <div className="flex flex-col gap-5">
      {topics.map((topic) => (
        <Field icon={topic.icon} text={topic.title} key={topic.title} />
      ))}
    </div>
  )
}

export default Chosetopic
