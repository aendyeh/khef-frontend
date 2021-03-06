import { Link, useNavigate } from 'react-router-dom';
import Search from './shared/Search';
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
        <Search onSubmit={handleSubmit} />
        <hr />
        <div className='browse-container'>
          <span>or <Link to={'/browse'}>browse</Link></span>
        </div>
      </div>
    </div>
  )
}

export default StartPage;