import { Route, Routes } from 'react-router-dom';
import './App.scss';
import StartPage from './components/StartPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/'>
          <Route index element={<StartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

