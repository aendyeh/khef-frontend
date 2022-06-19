import './Search.scss'

type Props = {
  onSubmit: () => void
  hasButton?: boolean
}

function Search({ onSubmit, hasButton }: Props) {
  function isButtonRendered() {
    return hasButton === undefined 
      ? true 
      : hasButton
  }

  return (
    <div className='search-container'>
      <form name='search' onSubmit={() => onSubmit()}>
        <input type='text' placeholder='Find by ingredient(s)' />
        {isButtonRendered() && 
          <button type='submit'>Find</button>
        }
      </form>
    </div>
  )
}

export default Search