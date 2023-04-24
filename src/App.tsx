import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { CreateTask } from './pages/CreateTask';
import { Shoutboard } from './pages/Shoutboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/shoutboard" element={<Shoutboard />} />
        </Routes>
    </div>
  )
}

export default App
