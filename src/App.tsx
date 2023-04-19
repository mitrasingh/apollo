import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreateTask } from './pages/CreateTask';


function App() {
  return (
    <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createtask" element={<CreateTask />} />
        </Routes>
    </div>
  )
}

export default App
