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
        <Route path='/browse'>
          <Route index element={<div>Hello!</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

