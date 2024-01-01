type Props = {
  Icon?: React.FC
  text: string
}

const Field = ({ Icon, text }: Props) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer p-2.5 shadow-sm flex gap-4 items-center">
      {Icon && <Icon />}
      {text}
    </div>
  )
}

export default Field
