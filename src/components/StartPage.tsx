import { useNavigate } from 'react-router-dom';
import './StartPage.scss'

function StartPage() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate('/browse?foo=bar')
  }

  return (
    <div className='start-page-container'>
      <div className='logo-container'>
        <img src='assets/img/khef-logo.png' alt='Khef logo' />
      </div>
      <div className='actions-container'>
        <div className='search-container'>
          <form name='search' onSubmit={() => handleSubmit()}>
            <input type='text' placeholder='Find by ingredient(s)' />
            <button type='submit'>Find</button>
          </form>
        </div>
        <hr />
        <div className='browse-container'>
          <span>browse by</span>
          <ul>
            <li>type</li>
            <li>ingredient</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default StartPage;