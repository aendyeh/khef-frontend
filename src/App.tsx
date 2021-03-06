import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import BrowsePage from './components/BrowsePage';
import RecipePage from './components/RecipePage';
import StartPage from './components/StartPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/'>
          <Route index element={<StartPage />} />
        </Route>
        <Route path='/browse'>
          <Route index element={<BrowsePage />} />
        </Route>

        <Route path='/recipe/:id' element={<RecipePage />} />

        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </div>
  );
}

export default App;

