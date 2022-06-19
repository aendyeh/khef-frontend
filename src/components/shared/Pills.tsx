import './Pills.scss'

type CollectiveProps = {
  items: IndividualProps[]
}

type IndividualProps = {
  text: string
  isActive: boolean
}

function Pills({ items }: CollectiveProps) {
  return (
    <div className='pills-container'> {
      items.map(item => <Pill key={item.text} text={item.text} isActive={item.isActive} />)
    }</div>
  )
}

function Pill({ text, isActive }: IndividualProps) {
  return (
    <div className='pill' data-active={isActive}>{text}</div>
  )
}

export default Pills