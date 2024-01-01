type Props = {
  icon?: string
  text: string
  onStart?: (a: string) => void
  onClick?: (b: string) => void
}

const Field = ({ icon, text, onStart, onClick }: Props) => {
  function onChoose() {
    if (onStart) onStart(text)
    if (onClick) onClick(text)
  }

  return (
    <div
      onClick={onChoose}
      className="bg-white rounded-xl cursor-pointer p-2.5 shadow-sm flex gap-4 items-center"
    >
      {icon && <img src={icon} />}
      {text}
    </div>
  )
}

export default Field
