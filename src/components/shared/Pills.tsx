type CollectiveProps = {
  items: IndividualProps[]
}

type IndividualProps = {
  text: string
  isActive: boolean
}

function Pills({ items }: CollectiveProps) {
  return items.map(item => <Pill text={item.text} isActive={item.isActive} />)
}

function Pill({ text, isActive }: IndividualProps) {
  return (
    <div data-active={isActive}>{text}</div>
  )
}

export default Pills