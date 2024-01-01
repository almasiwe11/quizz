import Field from "../Field/Field"
import Html from "../../Icons/Html"
import Css from "../../Icons/Css"
import Js from "../../Icons/Js"
import Accessibility from "../../Icons/Accessibility"

const Chosetopic = () => {
  return (
    <div className="flex flex-col gap-5">
      <Field Icon={Html} text="HTML" />
      <Field Icon={Css} text="CSS" />
      <Field Icon={Js} text="Javscript" />
      <Field Icon={Accessibility} text="Accessiblity" />
    </div>
  )
}

export default Chosetopic
