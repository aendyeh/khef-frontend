type Props = {
  onSubmit: () => void
}

function Search({ onSubmit }: Props) {
  return (
    <div className='search-container'>
      <form name='search' onSubmit={() => onSubmit()}>
        <input type='text' placeholder='Find by ingredient(s)' />
        <button type='submit'>Find</button>
      </form>
    </div>
  )
}

export default Search