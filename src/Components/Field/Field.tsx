type Props = {
  icon?: string
  text: string
}

const Field = ({ icon, text }: Props) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer p-2.5 shadow-sm flex gap-4 items-center">
      {icon && <img src={icon} />}
      {text}
    </div>
  )
}

export default Field
