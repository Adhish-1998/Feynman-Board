import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import AddTopic from './Components/AddTopic';
import Error from './Components/Error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/addtopic' element={<AddTopic />} />
            <Route path='/error'  element={<Error />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
