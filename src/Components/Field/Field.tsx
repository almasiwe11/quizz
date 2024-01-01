type Props = {
  icon?: string
  text: string
  onStart: (a: string) => void
}

const Field = ({ icon, text, onStart }: Props) => {
  return (
    <div
      onClick={() => onStart(text)}
      className="bg-white rounded-xl cursor-pointer p-2.5 shadow-sm flex gap-4 items-center"
    >
      {icon && <img src={icon} />}
      {text}
    </div>
  )
}

export default Field
