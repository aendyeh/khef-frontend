import { Route, Routes } from 'react-router-dom';
import './App.scss';
import StartPage from './components/StartPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;

